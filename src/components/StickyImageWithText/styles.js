import styled from 'styled-components';
import mq from '../../styles/mediaQueries';

export const ImageWrap = styled.div`
  width: 100%;
  top: 5px;
  display: inline-block;

  ${mq.medium`
    margin-top: 70px;
    padding: 20px;
    position: sticky;
    width: 50%;
    vertical-align: top;
  `}
`;

export const Paragraphs = styled.div`
  width: 100%;
  display: inline-block;
  padding: 20px 10px;

  ${mq.medium`
    width: 50%;
  `}
`;
