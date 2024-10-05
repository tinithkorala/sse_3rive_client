import axios from 'axios';
import { getAccessToken, getRefreshToken } from '../utils/tokenUtils';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_API_VERSION = import.meta.env.VITE_API_VERSION;

export const BASE_URL = `${VITE_API_BASE_URL}/api/${VITE_API_VERSION || 'v1'}`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error instanceof Error ? error : new Error(error)),
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    if (error.response) {
      console.error('Response error:', error.response);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('Error', error.message);
    }
    return Promise.reject(error instanceof Error ? error : new Error(error));
  },
);

export default axiosInstance;