
import React from 'react';
import foodData from '../foodData';
import { useDispatch } from 'react-redux';
import { addFood } from '../store/foodDiarySlice';
import "./foodList.css";

const FoodList = () => {
  const dispatch = useDispatch();

  return (
    <div className="food-list-container">
      <div className="food-list">
        {foodData.map(food => (
          <div key={food.id} className="food-card">
            <h2>{food.name}</h2>
            <div className='food-card-container'>
            <p>Serving: <br/>{food.serving}g</p>
            <p>Calories:<br/> {food.calories}</p>
            <p>Protein: <br/>{food.protein}g</p>
            <p>Sugar: <br/>{food.sugar}g</p>
            <p>Category: <br/>{food.category}</p>
            </div>
            <button className="add-button" onClick={() => dispatch(addFood(food))}>Add Food</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
