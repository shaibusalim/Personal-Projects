import React from 'react';
import { useDispatch } from 'react-redux';
import { addFood } from '../store/foodDiarySlice';
import "./foodCard.css";

const FoodCard = ({ id, name, serving, calories, protein, category, sugar }) => {
  const dispatch = useDispatch();

  const handleAddFood = () => {
    dispatch(addFood({ id, name, serving, calories, protein, category, sugar }));
  };

  return (
    <div className="food-card">
      <h2>{name}</h2>
      <div className='food-card-container'>
        <p>Serving: {serving}g</p>
        <p>Calories: {calories}</p>
        <p>Protein: {protein}g</p>
        <p>Sugar: {sugar}g</p>
        <p>Category: {category}</p>
      </div>
      
      <button className="add-button" onClick={handleAddFood}>Add Food</button>
    </div>
  );
};

export default FoodCard;
