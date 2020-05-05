import React, { useState, useEffect } from 'react';
import './Cart.css';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../databaseManager';
import foodsData from '../../foodsData/foods.json';
import CartItem from '../CartItem/CartItem';

function Cart(props) {
    const {cart, handlePlaceOrder, removeItem, orderPlaced} = props;
    // const [cart, setCart] = useState([]);

    // const removeItem = (itemId) => {
    //     const newCart = cart.filter(item => item.id !== itemId);
    //     setCart(newCart);
    //     removeFromDatabaseCart(itemId);
    // };

    // useEffect(() => {
    //     const savedCart = getDatabaseCart();
    //     const foodKeys = Object.keys(savedCart);
    //     const foodItemsCart = foodKeys.map(key => {
    //         const foodItem = foodsData.find(item => item.id == key);
    //         foodItem.quantity = savedCart[key];
    //         return foodItem;
    //     });
    //     setCart(foodItemsCart);
    // }, []);

    const total = cart.reduce((total, foodItem) => total + (foodItem.price * foodItem.quantity), 0);

    let deliveryCost = 0;
    if(total > 0) {
        deliveryCost = 4.99;
    }

    const grandTotal = (total + deliveryCost).toFixed(2);

    // const handlePlaceOrder = () => {
    //     setCart([]);
    //     processOrder();
    // };

    return (
        <div className="container cart">
            <h1 className="text-center mb-4 display-4"><u>Your Foods Cart</u></h1>
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {
                            cart.map(item => 
                                    <CartItem 
                                        key={item.id}
                                        item={item}
                                        removeItem={removeItem}
                                    />
                                )
                        }
                        {
                            orderPlaced && <div className="text-success">
                                    <h1 className="display-3">Thank You.</h1>
                                    <h2 className="display-4">You will get your foods soon!</h2>
                                </div>
                        }
                    </div>
                </div>
                <div className="col-md-4 order-summary">
                    <h3>Order Summary</h3>
                    <h5>Items Ordered: {cart.length}</h5>
                    <h5>Foods Price: ${total > 0 ? (total).toFixed(2): 0}</h5>
                    <h5>Delivery Cost: ${deliveryCost}</h5>
                    <h4>Total Price: ${total > 0 ? grandTotal : 0}</h4>
                    <button onClick={handlePlaceOrder} className="btn btn-success">Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
