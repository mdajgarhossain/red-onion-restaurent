import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';

function NoMatch() {
    return (
        <div className="no-match text-center my-md-5 text-danger">
            <h1 className="display-3">😥</h1>
            <h3>Sorry, Page Not Found</h3>
            <h1>404 Error!</h1>
            <Link className="home-btn text-white py-2 px-3" to="/">
                Back to Home
            </Link>
        </div>
    )
}

export default NoMatch
