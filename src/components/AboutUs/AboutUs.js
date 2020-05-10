import React, { useState } from 'react'
import Feature from '../Feature/Feature'
import featuresData from '../../foodsData/features.json';
import { useEffect } from 'react';

function AboutUs() {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        setFeatures(featuresData);
    }, []);

    return (
        <div className="about-us my-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Why Choose Us</h2>
                                <p className="mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nesciunt doloribus voluptatibus inventore consequatur maiores praesentium magnam officia. Ab expedita ducimus sunt id fugit tempore itaque eveniet eos exercitationem aut.</p>
                            </div>
                        </div>
                    </div>
                    {
                        features.map(feature => <Feature key={feature.id} feature={feature}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutUs
