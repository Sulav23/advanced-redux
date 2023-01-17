import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartShown: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggle(state) {
      state.isCartShown = !state.isCartShown;
    },
  },
});

export const modalActions = modalSlice.actions;
