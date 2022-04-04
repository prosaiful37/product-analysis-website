import React, { useEffect, useState } from 'react';
import Reviews from '../productReview/Reviews';

const Review = () => {
    const [reviews, setReviews] =  useState([]);
    
    useEffect(() => {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div> 
        
            {
                reviews.map(review => <Reviews key={review.id} review={review}></Reviews>)
            }
        
            
            
        </div>
    );
};

export default Review;