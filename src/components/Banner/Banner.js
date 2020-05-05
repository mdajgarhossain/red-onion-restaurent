import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <div className="banner d-flex align-items-center text-center">
            <div className="container">
                <h1 className="display-4 font-italic text-muted">Best foods waiting for your belly</h1>
                <form className="form-inline search-box">
                    <input className="form-control mr-sm-2 col-5" type="search" placeholder="Search your favorite food" aria-label="Search"/>
                    <button className="btn my-2 my-sm-0 text-white" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Banner
