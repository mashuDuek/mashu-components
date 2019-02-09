import React from 'react';
import StarRating from '../../packages/reviews/star_rating';

export default () => (
    <StarRating
        clickHandler={data => console.log(data)}
        rating="3">
    </StarRating>
);
    