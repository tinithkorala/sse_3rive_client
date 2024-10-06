import axios from "axios";
import { store } from "./../store/store";
import { signOut } from "../store/slices/authSlice";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
} from "../utils/tokenUtils";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_API_VERSION = import.meta.env.VITE_API_VERSION;

export const BASE_URL = `${VITE_API_BASE_URL}/api/${VITE_API_VERSION || "v1"}`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error instanceof Error ? error : new Error(error))
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      originalRequest.url.includes("/auth/sign-in") &&
      error.response?.status === 401
    ) {
      // Wrong password, or other sign-in failure
      return Promise.reject(
        new Error(error.response?.data?.message || error.message)
      );
    }

    if (error.response.status === 401) {
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        try {
          await getPostRefreshToken();
          return axiosInstance(originalRequest);
        } catch (error) {
          store.dispatch(signOut());
          // return Promise.reject(error);
        }
      } else {
        store.dispatch(signOut());
        // window.location.href = "/sign-in";
        // return Promise.reject(error);
      }
    } else if (error.response) {
      console.error("Response error:", error.response);
    } else if (error.request) {
      console.error("Request error:", error.request);
    } else {
      console.error("Error", error.message);
    }
    return Promise.reject(error instanceof Error ? error : new Error(error));
  }
);

const getPostRefreshToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    const response = await axiosInstance.post("/auth/refresh-token", {
      refresh_token: refreshToken,
    });
    if (response.status === "success") {
      setAccessToken(response?.data?.accessToken);
    }
  } catch (error) {
    store.dispatch(signOut());
    throw new Error("Could not refresh token");
  }
};

export default axiosInstance;
