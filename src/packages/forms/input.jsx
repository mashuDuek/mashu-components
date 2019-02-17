import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ipt = styled.input`
    border-radius: 3px;
    font-size: medium;
    border: 1px solid lightgray;
    padding: 3px;
    width: ${({ type }) => type === 'date' ? 'fit-content' : '80%'};
`;

const Input = (props) => (
    <Ipt
        required={props.required}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}>
    </Ipt>
);

Input.propTypes = {
    required: PropTypes.bool, 
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

Input.defaultProps = {
    required: false,
    type: 'text'
}

export default Input;