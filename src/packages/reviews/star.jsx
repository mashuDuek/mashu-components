import styled from 'styled-components';
import PropTypes from 'prop-types';

const Star = styled.i`
    height: 0;
    width: 0;
    margin: 15px;
    position: relative;
    border-right:  .3em solid transparent;
    border-bottom: .7em  solid ${({ checked }) => checked ? '#FC0' : '#E7EAD5'};
    border-left:   .3em solid transparent;
    font-size: 15px;
    
    :hover {
        cursor: pointer;
    }
    
    &:before, &:after {
        content: '';
        
        display: block;
        width: 0;
        height: 0;
        
        position: absolute;
        top: .6em;
        left: -1em;
    
        border-right:  1em solid transparent;
        border-bottom: .7em  solid ${({ checked }) => checked ? '#FC0' : '#E7EAD5'};
        border-left:   1em solid transparent;
    
        transform: rotate(-35deg);
    }
    
    &:after {  
        transform: rotate(35deg);
    }
`;

Star.propTypes = {
    checked: PropTypes.bool.isRequired,
    title: PropTypes.number.isRequired,
    onClick: PropTypes.func
};

export default Star;