import axiosInstance from "../config/apiConfig";

// Handle dashboard stats
export const dashboardStats = async (periodFilter = "TODAY") => {
  try {
    const response = await axiosInstance.get(
      `/dashboard?filter=${periodFilter}`
    );
    return response;
  } catch (error) {
    console.error("Dashboard Stats error:", error);
    throw error;
  }
};
