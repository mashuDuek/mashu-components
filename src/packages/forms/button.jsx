import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    margin: 5px;
    background-color: #896FF0;
    padding: 5px;
    border-radius: 3px;
    color: #ECDDE0;

    :hover {
        cursor: pointer;
        background-color: #6745ED;
    }
`;

export default (props) => (
    <Button>{props.text}</Button>
);

