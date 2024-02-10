import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  email: null,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.email = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.email = null;
    },
  },
});

export const { login, logout } = userInfoSlice.actions;

export default userInfoSlice.reducer;
