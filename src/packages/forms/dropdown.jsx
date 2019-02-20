import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DropdowOption from './dropdown_option';

const List = styled.select`
    border-radius: 3px;
    font-size: medium;
    border: 1px solid lightgray;
    padding: 3px;
    width: 80%;
`;

const Dropdown = (props) => (
    <List onChange={props.onChange}>
        {props.options.map((option,i) => (
            <DropdowOption 
                key={i}
                value={option.value}
                text={option.text}>
            </DropdowOption>
        ))}
    </List>
);

Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Dropdown;