
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFoodDiary, selectTotalNutrients } from '../store/foodDiarySlice';
import "./foodDiary.css";

const FoodDiary = () => {
  const foodDiary = useSelector(selectFoodDiary);
  const totalNutrients = useSelector(selectTotalNutrients);

  return (
    <div className="food-diary">
      <h2>Food Diary</h2>
      {foodDiary.map((food, index) => (
        <div key={index} className="food-diary-item">
          <p>{food.name}</p>
          <p>Serving: {food.serving}g</p>
          <p>Calories: {food.calories}</p>
          <p>Protein: {food.protein}g</p>
          <p>Sugar: {food.sugar}g</p>
        </div>
      ))}
      <div className="food-diary-summary">
        <h2>Total Nutrients</h2>
        <p>Total Calories: {totalNutrients.calories}</p>
        <p>Total Protein: {totalNutrients.protein}g</p>
        <p>Total Sugar: {totalNutrients.sugar}g</p>
      </div>
    </div>
  );
};

export default FoodDiary;
