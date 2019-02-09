import React from 'react';
import styled from 'styled-components';
import StarInput from './star';

const InputList = styled.ul`
    width: 50%;
    padding: 0px;
    margin: 0px;
    margin-top: 0px;
    display: flex; 
    justify-content: space-around;
    list-style: none;
`;

const stars = (handler, rating) => (
    [...Array(5).keys()].map(idx => (
        <StarInput 
            key={idx}
            title={idx + 1}
            onClick={handler}
            checked={rating >= (idx + 1)}>
        </StarInput>
    ))
)

export default ({ clickHandler, rating }) => (
    <InputList>
        {stars(clickHandler, rating)}
    </InputList>
);

