import React, { useState, useEffect } from 'react';
import './Foods.css';
import foodsData from '../../foodsData/foods.json';
import FoodItem from '../FoodItem/FoodItem';

function Foods(props) {
    const [foods, setFoods] = useState([]);
    const [foodCategory, setFoodCategory] = useState('breakfast');

    useEffect(() => {
        setFoods(foodsData);
    }, []);

    const selectedCategory = foods.filter(foodItem => foodItem.category === foodCategory);

    const handleFoodCategory = (category) => {
        setFoodCategory(category);
    };

    return (
        <div className="foods">
            <div className="container nav-container">
                <ul className="nav justify-content-center">
                    <li onClick={() => handleFoodCategory('breakfast')} className="nav-item">
                        <span className={foodCategory === 'breakfast' ? "nav-link active" : "nav-link"}>Breakfast</span>
                    </li>
                    <li onClick={() => handleFoodCategory('lunch')} className="nav-item">
                        <span className={foodCategory === 'lunch' ? "nav-link active" : "nav-link"}>Lunch</span>
                    </li>
                    <li onClick={() => handleFoodCategory('dinner')} className="nav-item">
                        <span className={foodCategory === 'dinner' ? "nav-link active" : "nav-link"}>Dinner</span>
                    </li>
                </ul>
            </div>

            <div className="container my-5">
                <div className="row justify-content-around">
                    {
                        selectedCategory.map(item => 
                            <FoodItem 
                                key={item.id}
                                item={item}
                                />
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Foods
