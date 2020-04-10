import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <div className="navbar-section">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">
                        <img className="img-fluid" src={logo} alt="red-onion-logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="/cart">
                                <FontAwesomeIcon icon={faCartPlus} />
                            </a>
                            <a className="nav-item nav-link" href="/login">Login</a>
                            <a className="nav-item nav-link signUpLink" href="/signUp">Sign Up</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
