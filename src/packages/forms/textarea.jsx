import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextArea = styled.textarea``;

export default (props) => (
    <TextArea
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
    ></TextArea>
);