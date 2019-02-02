import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border-radius: 3px;
`;

export default (props) => (
    <Input
        required={props.required}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
    ></Input>
)