import { createSlice } from "@reduxjs/toolkit";
import { themeModes } from "../../utils/uiUtils";

const initialState = {
  theme: themeModes?.LIGHT,
  isNavbarCollapsed: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleNavbar(state) {
      state.isNavbarCollapsed = !state.isNavbarCollapsed;
    },
    toggleTheme(state) {
      state.theme = state.theme === themeModes?.LIGHT ? themeModes?.DARK : themeModes?.LIGHT;
    },
  },
});

export const { toggleNavbar, toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;
