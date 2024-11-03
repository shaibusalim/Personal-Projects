import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  diary: [],
  target: {
    calories: 0,
    protein: 0,
    sugar: 0
  }
};

const foodDiarySlice = createSlice({
  name: 'foodDiary',
  initialState,
  reducers: {
    addFood: (state, action) => {
      state.diary.push(action.payload);
    },
    setTarget: (state, action) => {
      state.target = action.payload;
    }
  }
});

export const { addFood, setTarget } = foodDiarySlice.actions;

// Selector to get the food diary
export const selectFoodDiary = (state) => state.foodDiary.diary;

// Selector to get total nutrients
export const selectTotalNutrients = (state) => {
  return state.foodDiary.diary.reduce(
    (totals, food) => {
      totals.calories += food.calories;
      totals.protein += food.protein;
      totals.sugar += food.sugar;
      return totals;
    },
    { calories: 0, protein: 0, sugar: 0 }
  );
};

export default foodDiarySlice.reducer;
