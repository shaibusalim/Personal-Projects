
import { configureStore } from "@reduxjs/toolkit";
import foodDiaryReducer from "./foodDiarySlice";

export const store = configureStore({
  reducer: {
    foodDiary: foodDiaryReducer,
  },
});
