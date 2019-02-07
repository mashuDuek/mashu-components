import React from 'react';
import styled from 'styled-components';

const InputList = styled.ul`
    width: 100%;
    padding: 0px;
    margin-bottom: 10px;
    margin-top: 0px;
    display: flex; 
    justify-content: space-around;
    list-style: none;
`;

const StarInput = styled.i`
    height: 0;
    width: 0;
    margin-left: .9em;
    margin-right: .9em;
    margin-bottom: 1.2em;

    position: relative;
    border-right:  .3em solid transparent;
    border-bottom: .7em  solid ${({ checked }) => checked ? '#FC0' : '#E7EAD5'};
    border-left:   .3em solid transparent;
    font-size: 10px;
    
    :hover {
        cursor: pointer;
    }
    
    &:before, &:after {
        content: '';
        
        display: block;
        width: 0;
        height: 0;
        
        position: absolute;
        top: .6em;
        left: -1em;
    
        border-right:  1em solid transparent;
        border-bottom: .7em  solid ${({ checked }) => checked ? '#FC0' : '#E7EAD5'};
        border-left:   1em solid transparent;
    
        transform: rotate(-35deg);
    }
    
    &:after {  
        transform: rotate(35deg);
    }
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

