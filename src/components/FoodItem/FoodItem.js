import React from 'react';
import './FoodItem.css';

function FoodItem(props) {
    const {image, title, shortDescription, price} = props.item;
    
    return (
        <div className="foodItem col-md-3 mx-md-1">
            <div className="card text-center">
                <img src={image} className="card-img-top mx-auto d-block" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{shortDescription}</p>
                    <h6>{price}</h6>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
