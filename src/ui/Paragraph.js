import React from 'react';
import styled from 'styled-components/macro';

const Paragraph = ({largeFirstLetter, children}) => (
    <Text largeFirstLetter={largeFirstLetter}>{children}</Text>
)

const Text = styled.p`
    font-family: serif;
    line-height:26px;
    font-size:20px;
    margin:20px 0;
    &::first-letter { 
    font-size: ${props => props.largeFirstLetter ? '50px' : '20px'};
    }
`;

export default Paragraph;