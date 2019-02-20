import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Opt = styled.option`
    font-size: medium;
    border: 1px solid lightgray;
    padding: 3px;
    width: 80%;
`;

const DropdownOption = ({ value, text }) => (
    <Opt value={value}>{text}</Opt>
);

DropdownOption.propTypes = {
    value: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default DropdownOption;