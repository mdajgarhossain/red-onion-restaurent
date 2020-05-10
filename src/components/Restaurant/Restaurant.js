import React, { useState, useEffect } from 'react';
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Foods from '../Foods/Foods'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import NoMatch from '../NoMatch/NoMatch';
import FoodItemDetails from '../FoodItemDetails/FoodItemDetails';
import { addToDatabaseCart, getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../databaseManager';
import foodsData from '../../foodsData/foods.json';
import { AuthProvider, PrivateRoute } from '../Login/useAuth';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';

function Restaurant() {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const foodKeys = Object.keys(savedCart);
        const foodItemsCart = foodKeys.map(key => {
            const foodItem = foodsData.find(item => item.id == key);
            foodItem.quantity = savedCart[key];
            return foodItem;
        });
        setCart(foodItemsCart);
    }, []);
    
    const handleCart = (foodItem, count) => {
        const toBeAddedId = foodItem.id;
        const sameFood = cart.find(item => item.id === toBeAddedId);

        // let count = 1;
        let newCart;
        if(sameFood) {
            count = sameFood.quantity + count;
            sameFood.quantity = count;
            const others = cart.filter(item => item.id !== toBeAddedId);
            newCart = [...others, sameFood];
        } else {
            foodItem.quantity = count;
            newCart = [...cart, foodItem];
        }

        setCart(newCart);
        addToDatabaseCart(foodItem.id, count);
    };

    const removeItem = (itemId) => {
        const newCart = cart.filter(item => item.id !== itemId);
        setCart(newCart);
        removeFromDatabaseCart(itemId);
    };

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    };

    return (
        <div className="restaurant">
            <AuthProvider>          
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Header cart={cart}/>
                            <Banner />
                            <Foods />
                            <AboutUs />
                            <Footer />
                        </Route>
                        <PrivateRoute path="/cart">
                            <Header cart={cart}/>
                            <Cart 
                                cart={cart}
                                handlePlaceOrder={handlePlaceOrder}
                                removeItem={removeItem}
                                orderPlaced={orderPlaced}
                            />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/food/:foodId">
                            <Header cart={cart}/>
                            <FoodItemDetails handleCart={handleCart}/>
                        </Route>
                        <Route path="*">
                            <Header cart={cart}/>
                            <NoMatch />
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    )
}

export default Restaurant
