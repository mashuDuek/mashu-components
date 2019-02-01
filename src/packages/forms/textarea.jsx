import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextArea = styled.textarea`
    border-radius: 3px;
    border: 1px solid lightgray;
`;

export default (props) => (
    <TextArea
        required={props.required}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
    ></TextArea>
);