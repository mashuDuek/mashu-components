import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="routing-bar">
        <Link to="/">Home</Link>
        <Link to="/form">Form Cretor</Link>
        <Link to="/input">Input Creator</Link>
        <Link to="/textarea">TextArea Creator</Link>
        <Link to="/button">Button Creator</Link>
        <Link to="/review">Review</Link>
        <Link to="/review-form">Review Form</Link>
        <Link to="/star-rating">Star Rating</Link>
    </div>
);