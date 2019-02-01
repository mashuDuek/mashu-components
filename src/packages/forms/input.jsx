import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input``;

export default (props) => (
    <Input
        required={props.required}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
    ></Input>
)