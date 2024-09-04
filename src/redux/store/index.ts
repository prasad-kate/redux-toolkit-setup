import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/countSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// src/redux/store.ts
export type RootState = ReturnType<typeof store.getState>;
