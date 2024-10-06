import axiosInstance from "../config/apiConfig";

// const sortBy = 'sort=-createdAt,-due_date&limit=10&page=2';
const sort = 'sort=-createdAt,-due_date';
const limit = 'limit=5';

const finaleQuery = `?${sort}&${limit}`

// Handle user task-filter
export const taskFilter = async (priorityStr, page = 1) => {
  try {
    let queryString = `${finaleQuery}&page=${page}&priority[in]=${priorityStr.toUpperCase()}`;
    const response = await axiosInstance.get(`/tasks${queryString}`);
    return response;
  } catch (error) {
    console.error("Sign-up error:", error);
    throw error;
  }
};

// Handle user task-create
export const taskCreate = async (formData) => {
  try {
    const response = await axiosInstance.post(`/tasks`, formData);
    return response;
  } catch (error) {
    console.error("Sign-up error:", error);
    throw error;
  }
};

// Handle user task-update
export const taskUpdate = async (formData) => {
  try {
    const response = await axiosInstance.patch(`/tasks/${formData.id}`, formData);
    return response;
  } catch (error) {
    console.error("Sign-up error:", error);
    throw error;
  }
};