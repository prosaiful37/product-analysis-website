import React from 'react';
import './Reviews.css';

const Reviews = (props) => {
    const {name, img, discription, rating} = props.review;
    return (
        <div className='container'>
        <div class="row g-2 my-5">
                <div class="col col-sm">
                    <div class="card w-50 h-100 py-5 border-0 pdr">
                        <img src={img} class="card-img-top img-fluid mx-auto d-block reviewers" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"> {name}</h5>
                            <p class="card-text">{discription}</p>
                            <p class="card-text">Rating: {rating}</p>
                        </div>
                    </div>
                </div>
        </div>
            
        </div>    
    );
};

export default Reviews;