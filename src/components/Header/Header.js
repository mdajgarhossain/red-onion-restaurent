import React, { createContext } from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


function Header(props) {
    // console.log(props);
    const {cart} = props;
    
    return (
        <div className="navbar-section">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link to="/" className="navbar-brand">
                        <img className="img-fluid" src={logo} alt="red-onion-logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/cart" className="nav-item nav-link">
                                <FontAwesomeIcon icon={faCartPlus} /> <span>{cart.length}</span>
                            </Link>
                            <Link to="/login" className="nav-item nav-link">
                                Login
                            </Link>
                            <Link to="/signUp" className="nav-item nav-link signUpLink text-white">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
