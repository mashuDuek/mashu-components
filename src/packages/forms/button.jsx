import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Btn = styled.button`
    background-color: #896FF0;
    color: #FEFEFE;
    padding: 5px;
    border-radius: 3px;
    font-size: medium;
    display: flex;
    justify-content: center;
    align-self: flex-end;

    :hover {
        transition: .2s;
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

