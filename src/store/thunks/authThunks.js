import { createAsyncThunk } from '@reduxjs/toolkit';

import { signUp } from '../../api/authApi';

export const signUpThunk = createAsyncThunk(
  'auth/sign-up',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await signUp(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);