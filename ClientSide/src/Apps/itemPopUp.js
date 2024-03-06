import { createSlice } from "@reduxjs/toolkit";

export const itemPopUp = createSlice({
  name: "itemPopUp",
  initialState: {
    details: {},
    PopUp: false,
  },
  reducers: {
    setDetails: (state, action) => {
      state.details = action.payload.details;
      state.PopUp = !action.payload.PopUp;
    },
  },
});

export const { setDetails } = itemPopUp.actions;

export default itemPopUp.reducer;
