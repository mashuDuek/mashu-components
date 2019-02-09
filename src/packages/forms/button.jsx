import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Btn = styled.button`
    margin: 5px;
    background-color: #896FF0;
    padding: 5px;
    border-radius: 3px;
    color: #ECDDE0;
    font-size: medium;

    :hover {
        cursor: pointer;
        background-color: #6745ED;
    }
`;

const Button = ({ text }) => (
    <Btn>{text}</Btn>
);

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;

