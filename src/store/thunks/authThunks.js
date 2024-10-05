import { createAsyncThunk } from '@reduxjs/toolkit';

import { signUp, signIn } from '../../api/authApi';

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

export const signInThunk = createAsyncThunk(
  'auth/sign-in',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await signIn(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);