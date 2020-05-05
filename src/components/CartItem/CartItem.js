import React from 'react';
import './CartItem.css';

function CartItem(props) {
    const {id, title, category, price, image, quantity} = props.item;
    return (
        <div className="d-flex py-2 cart-item">
            <div className="col-md-4">
                <img className="img-fluid" src={image} alt=""/>
            </div>
            <div className="col-md-8">
                <h5>{title}</h5>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => props.removeItem(id)} className="btn btn-danger">Remove Item</button>
            </div>
        </div>
    )
}

export default CartItem
