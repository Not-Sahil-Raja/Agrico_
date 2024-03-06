import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./userInfoslice";
import cartSlice from "./cartSlice";
import itemPopUp from "./itemPopUp";

export const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
    cart: cartSlice,
    itemPopUp: itemPopUp,
  },
});
