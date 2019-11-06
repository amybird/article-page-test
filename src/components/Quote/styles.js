import styled from 'styled-components';
import mq from '../../styles/mediaQueries';

export const QuoteText = styled.p`
    font-size:30px;
    line-height: 40px;
    width:100%;
    padding: 10px;
    text-align: left;
    text-decoration:underline;

    ${mq.medium`
        font-size:40px;
        line-height: 50px;
    `}
`;
