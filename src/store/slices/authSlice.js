import { createSlice } from "@reduxjs/toolkit";

import { signUpThunk, signInThunk } from "./../thunks/authThunks";
import { stateStatus } from "../../config/appConfig";
import {
  clearTokens,
  setAccessToken,
  setRefreshToken,
} from "../../utils/tokenUtils";

const initialState = {
  isAuthenticated: false,
  user: null,
  status: stateStatus.IDLE,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.status = stateStatus.IDLE;
      state.error = null;
      clearTokens();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.pending, (state) => {
        state.status = stateStatus.LOADING;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.data.user;
        state.status = stateStatus.SUCCEEDED;
        state.error = null;
        setAccessToken(action.payload.data.accessToken);
        setRefreshToken(action.payload.data.refreshToken);
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.status = stateStatus.FAILED;
        state.error = action.payload;
      })
      .addCase(signInThunk.pending, (state) => {
        state.status = stateStatus.LOADING;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.data.user;
        state.status = stateStatus.SUCCEEDED;
        state.error = null;
        setAccessToken(action.payload.data.accessToken);
        setRefreshToken(action.payload.data.refreshToken);
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.status = stateStatus.FAILED;
        state.error = action.payload;
      });
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
