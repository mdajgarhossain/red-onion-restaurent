import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import foodsData from '../../foodsData/foods.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './FoodItemDetails.css';

function FoodItemDetails(props) {
    const [itemCount, setItemCount] = useState(1);
    let {foodId} = useParams();

    const foodItem = foodsData.find(item => item.id == foodId);

    return (
        <div className="container food-item-details my-5">
            <div className="row">
                <div className="col-md-6 my-5">
                    <h1>{foodItem.title}</h1>
                    <br/>
                    <p className="text-justify">{foodItem.detailDescription}</p>
                    <br/>
                    <div className="d-flex">
                        <h2>${foodItem.price}</h2>
                        <p className="handle-count mx-4">
                            <span onClick={() => setItemCount(itemCount <= 1 ? 1 : itemCount-1)}>-</span>
                                {itemCount}
                            <span onClick={() => setItemCount(itemCount+1)}>+</span>
                        </p>
                    </div>
                    <br/>
                    <button onClick={() => props.handleCart(foodItem, itemCount)} className="btn cart-btn text-white">
                        <FontAwesomeIcon icon={faCartPlus} /> Add
                    </button>

                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={foodItem.image} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default FoodItemDetails
