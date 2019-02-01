import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export default ({ items }) => (
    <List>{items}</List>
);