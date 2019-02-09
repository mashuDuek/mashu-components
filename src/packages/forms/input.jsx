import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ipt = styled.input`
    border-radius: 3px;
`;

const Input = (props) => (
    <Ipt
        required={props.required}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
    ></Ipt>
);

Input.propTypes = {
    required: PropTypes.boolean, 
    type: PropTypes.string,
    placehodler: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

Input.defaultProps = {
    required: false,
    type: 'text'
}

export default Input;