import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextArea = styled.textarea`
    border-radius: 3px;
    border: 1px solid lightgray;
    margin: 5px;
    height: 100px;
`;

const TA = (props) => (
    <TextArea
        required={props.required}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
    ></TextArea>
);

TA.propTypes = {
    required: PropTypes.boolean,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func 
};

TA.defaultProps = {
    required: false, 
    type: 'text'
};

export default TA;