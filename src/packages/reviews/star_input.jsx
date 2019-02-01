import React from 'react';
import styled from 'styled-components';

const Star = styled.input.attrs({ type: 'radio' })`
    checked: ${({ checked }) => checked ? true : false}
`;

export default Star;