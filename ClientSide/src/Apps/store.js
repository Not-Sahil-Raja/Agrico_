import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./userInfoslice";

export const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
  },
});
