import React from 'react';
import styled, {css} from 'styled-components/macro';
import mq from '../styles/mediaQueries';

const Quote = ({quote, ...props}) => (
    <QuoteText>{props[0] ? props[0].quote : quote}</QuoteText>
)

const QuoteText = styled.p`
    font-size:30px;
    line-height: 40px;
    width:100%;
    padding: 10px;
    text-align: left;
    text-decoration:underline;
    ${mq.medium(css`
        font-size:40px;
        line-height: 50px;
    `)}
`;

export default Quote;