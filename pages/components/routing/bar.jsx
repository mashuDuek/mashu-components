import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="routing-bar">
        <Link to="/form">Form</Link>
        <Link to="/review">Review</Link>
        <Link to="/review-form">Review Form</Link>
        <Link to="/star-rating">Star Rating</Link>
    </div>
)