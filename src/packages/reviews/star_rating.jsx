import React from 'react';
import styled from 'styled-components';

const InputList = styled.ul`
    width: 100%;
    padding: 0px;
    display: flex; 
    justify-content: space-around;
    list-style: none;
`;

const StarInput = styled.input`
    color: transparent;
    height: 20px;
    width: 20px;
    border-radius: 3px;
    border: 1px solid black;
    margin: 0px;
    background-color: ${({ checked }) => checked ? 'black' : 'transparent' };
`;

const stars = (handler, rating) => (
    [...Array(5).keys()].map(idx => (
        <StarInput 
            key={idx}
            value={idx + 1}
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