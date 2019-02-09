import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Lbl = styled.label`
    font-family: sans-serif;
`;

const Label = ({ text }) => (
    <Lbl>{text}</Lbl>
);

Label.propTypes = {
    text: PropTypes.string.isRequired
};

export default Label;