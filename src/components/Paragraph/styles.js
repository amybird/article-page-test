import styled from 'styled-components';

export const Text = styled.p`
    font-family: serif;
    line-height:26px;
    font-size:20px;
    margin:20px 0;
    &::first-letter { 
    font-size: ${(props) => (props.largeFirstLetter ? '50px' : '20px')};
    }
`;
