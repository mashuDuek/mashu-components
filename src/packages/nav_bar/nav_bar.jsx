import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavBar = styled.div`
    width: 100%;
    height: 10%;
    background-color: lightgrey;
`;

const Nav = (props) => (
    <NavBar>
        <p>text here as content to see the bar</p>
    </NavBar>
);

export default Nav;