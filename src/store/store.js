import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cartSlice";
import { modalSlice } from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    cart: cartReducer,
  },
});
