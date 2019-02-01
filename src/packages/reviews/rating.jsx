import React from 'react';
import styled from 'styled-components';

import StarInput from './star_input';

const stars = (rating) => {
    const array = [];
    for (let index = 1; index < 6; index++) {
        array.push(
            <StarInput 
                key={index} 
                value={index}
                checked={rating >= index ? true : false} 
            >
            </StarInput>
        )
    };

    return array;
}

export default ({ clickHandler, rating }) => (
    <div onClick={clickHandler}>
        {stars(rating)}
    </div>
);