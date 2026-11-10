import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
