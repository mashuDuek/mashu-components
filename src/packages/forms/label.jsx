import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label``;

export default (props) => (
    <Label>{props.text}</Label>
)