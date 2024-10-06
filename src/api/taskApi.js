import axiosInstance from "../config/apiConfig";

const sort = "sort=-createdAt,-due_date";
const limit = "limit=5";

const finaleQuery = `?${sort}&${limit}`;

// Handle user task-filter
export const taskFilter = async (priorityStr, statusStr, page = 1) => {
  try {
    let queryString = `${finaleQuery}&page=${page}`;

    if (priorityStr?.length !== 0) {
      queryString += `&priority[in]=${priorityStr.toUpperCase()}`;
    }

    if (statusStr?.length !== 0) {
      queryString += `&status[in]=${statusStr.toUpperCase()}`;
    }

    const response = await axiosInstance.get(`/tasks${queryString}`);
    return response;
  } catch (error) {
    console.error("Task Filter error:", error);
    throw error;
  }
};

// Handle user task-create
export const taskCreate = async (formData) => {
  try {
    const response = await axiosInstance.post(`/tasks`, formData);
    return response;
  } catch (error) {
    console.error("Task Create error:", error);
    throw error;
  }
};

// Handle user task-update
export const taskUpdate = async (formData) => {
  try {
    const response = await axiosInstance.patch(
      `/tasks/${formData.id}`,
      formData
    );
    return response;
  } catch (error) {
    console.error("Task Update error:", error);
    throw error;
  }
};

// Handle user task-delete
export const taskDelete = async (id) => {
  try {
    const response = await axiosInstance.delete(`/tasks/${id}`);
    return response;
  } catch (error) {
    console.error("Task Delete error:", error);
    throw error;
  }
};
