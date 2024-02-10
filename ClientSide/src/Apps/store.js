import { configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "./userInfo";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});
