import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducers from "./themeSlice";
export const store = configureStore({
  reducer: { themeKey: themeSliceReducers },
});
