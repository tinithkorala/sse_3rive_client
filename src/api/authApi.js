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

// Handle user sign-in
export const signIn = async (formData) => {
  try {
    const response = await axiosInstance.post('/auth/sign-in', formData);
    return response;
  } catch (error) {
    console.error('Sign-in error:', error);
    throw error;
  }
};
