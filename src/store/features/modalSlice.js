import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartShown: false,
  notification: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggle(state) {
      state.isCartShown = !state.isCartShown;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const modalActions = modalSlice.actions;
