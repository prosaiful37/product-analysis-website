import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm'>
                    <div className='heading-section'>
                        <h1 className='fw-bold'>Perfect <br /> 
                        for travelling
                        </h1>
                        <p>You'll love how smoothly it glides along the ground with the swivel wheels.</p>
                        <button type="button" className="btn btn-secondary">Shop Now</button>
                    </div>
                </div>
                <div className='col-lg-6 col-sm'>
                    <div className='site-image '>
                        <img className='img-fluid' src="bag1.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className='review my-5 text-center'>
                <h1 className='my-5'>Customer Review</h1>
                <button type="button" className="btn btn-primary btn-lg">See All Reviews</button>
            </div>
        </div>
    
    );
};

export default Home;