import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../Hooks/useReview';
import Reviews from '../productReview/Reviews';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm'>
                    <div className='heading-section'>
                        <h1 className='fw-bold'>Perfect <br /> 
                        for travelling
                        </h1>
                        <p>You'll love how smoothly it glides along the ground with the swivel wheels. Travel safely using the products of our bags pack. School bags college, university, bags etc.</p>
                        <button type="button" className="btn btn-secondary">Shop Now</button>
                    </div>
                </div>
                <div className='col-lg-6 col-sm'>
                    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img className='img-fluid d-block w-100' src="bag1.jpg" alt="" />
                                </div>
                                <div class="carousel-item">
                                    <img className='img-fluid d-block w-100' src="bag2.jpg" alt="" />
                                </div>
                                <div class="carousel-item">
                                    <img className='img-fluid d-block w-100' src="bag3.jpg" alt="" />
                                </div>
                            </div>
                    </div>

                   
                </div>
            </div>
            <div className='review my-5 text-center'>
                <h1 className='my-5'>Customer Review</h1>
                   
                {
                    reviews.slice(0, 3).map(review => <Reviews key={review.id} review={review}></Reviews>)
                }

                 <Link to="/review">
                    <button type="button" className="btn btn-secondary btn-lg">See All Reviews</button>
                 </Link>       
                
            </div>
        </div>
    
    );
};

export default Home;