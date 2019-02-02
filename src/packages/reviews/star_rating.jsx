import React from 'react';
import styled from 'styled-components';

const StarInput = styled.input.attrs({ type: 'radio' })`
    checked: ${({ checked }) => checked ? true : false}
`;

const stars = (rating) => {
    const array = [];
    for (let idx = 1; idx < 6; idx++) {
        array.push(
            <StarInput 
                key={idx} 
                value={idx}
                checked={rating >= idx ? true : false} 
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