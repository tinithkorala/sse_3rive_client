import axiosInstance from "../config/apiConfig";
// Handle user task-filter
export const taskFilter = async (priorityStr) => {
  try {
    let queryString = `?status[in]=${priorityStr}`;
    const response = await axiosInstance.get(`/tasks${queryString}`);
    return response;
  } catch (error) {
    console.error("Sign-up error:", error);
    throw error;
  }
};
