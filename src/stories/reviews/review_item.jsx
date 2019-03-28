import React from 'react';
import ReviewItem from '../../packages/reviews/review_item';

export default () => (
    <ReviewItem
        body="I liked the drinks more than anything. The food was okay, but the service definitely brought down the rest of the experience. I'd recommend to anyone who can overlook weird accents"
        rating={3}
        username="Mark"
    ></ReviewItem>
);