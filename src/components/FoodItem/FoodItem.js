import React from 'react';
import './FoodItem.css';
import { Link } from 'react-router-dom';

function FoodItem(props) {
    
    const {image, title, shortDescription, price, id} = props.item;
    
    return (
        <div className="foodItem col-md-3 mx-md-1">
            <Link className="linked-item" to={"/food/"+id}>
                <div className="card text-center">
                    <img src={image} className="card-img-top mx-auto d-block" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{shortDescription}</p>
                        <h6>${price}</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FoodItem
