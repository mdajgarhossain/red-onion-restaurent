import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';

function Cart(props) {
    const {cart, handlePlaceOrder, removeItem, orderPlaced} = props;

    const total = cart.reduce((total, foodItem) => total + (foodItem.price * foodItem.quantity), 0);

    let deliveryCost = 0;
    if(total > 0) {
        deliveryCost = 4.99;
    }

    const grandTotal = (total + deliveryCost).toFixed(2);

    return (
        <div className="container cart">
            <h1 className="text-center mb-4 display-4"><u>Your Foods Cart</u></h1>
            <div className="row my-4">
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
