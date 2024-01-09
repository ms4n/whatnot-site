import { configureStore } from "@reduxjs/toolkit";
import phoneNumberReducer from "./features/phoneNumberSlice";

export const store = configureStore({
  reducer: {
    phoneNumber: phoneNumberReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
