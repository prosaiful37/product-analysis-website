import React, { useEffect, useState } from 'react';
import useReview from '../Hooks/useReview';
import Reviews from '../productReview/Reviews';

const Review = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div> 
            
            {
                reviews.map(review => <Reviews key={review.id} review={review}></Reviews>)
            }
        
            
            
        </div>
    );
};

export default Review;