import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight,faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './Feature.css';

function Feature(props) {
    const [descriptionCollapse, setDescriptionCollapse] = useState(false);
    const {icon,image,title,description} = props.feature;

    const showMore = () => {
        setDescriptionCollapse(true);
    }
    const showLess = () => {
        setDescriptionCollapse(false);
    }
    
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <img src={image} alt="" className="card-img-top"/>
                <div className="card-body">
                    <div className="d-flex">
                        <img className="mr-2" height="40px" src={icon} alt=""/>
                        <div>
                            <h5>{title}</h5>
                            <p>
                                {
                                    descriptionCollapse ? description : description.substr(0,100)
                                }
                            </p>
                            {
                                descriptionCollapse? 
                                <span onClick={showLess} className="card-link collapse-btn">See Less <FontAwesomeIcon className="icon" icon={faArrowAltCircleLeft} /></span>
                                :
                                <span onClick={showMore} className="card-link collapse-btn">See More <FontAwesomeIcon className="icon" icon={faArrowAltCircleRight} /></span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
