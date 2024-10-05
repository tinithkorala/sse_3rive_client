import axiosInstance from './../config/apiConfig';
// Handle user sign-up
export const signUp = async (formData) => {
  try {
    const response = await axiosInstance.post('/auth/sign-up', formData);
    return response;
  } catch (error) {
    console.error('Sign-up error:', error);
    throw error;
  }
};
