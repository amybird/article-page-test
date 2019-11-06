import styled from 'styled-components';
import mq from '../../styles/mediaQueries';

export const HeroImageWrap = styled.div`
  position: relative;

  .fade-in {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s linear;
  }

  .fade-out {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.3s, opacity 0.3s linear;
  }

  ${mq.medium`
    height: 500px;
    overflow: hidden;
  `}
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

export const ImageWrap = styled.div`
  ${mq.medium`
    position: absolute;
  `}
`;

export const TextOverlay = styled.div`
  position: absolute;
  color: white;
  width: 100%;
  top: 50%;
  padding: 0 30px;
  * {
    font-weight: lighter;
  }

  span {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 10px;
  }

  h1 {
    margin: 0;
    text-transform: uppercase;
    font-family: serif;
    font-size: 30px;
  }

  h3 {
    margin: 0;
    text-align: right;
    font-family: serif;
  }

  ${mq.medium`
    padding: 0 0 0;
    div {
      max-width: 1080px;
      margin: 0 auto;
      height: 100%;
      /* padding: 250px 0 0; */
    }
    span {
      font-size: 16px;
    }
    h1 {
      font-size: 70px;
      letter-spacing: 2px;
    }
    h3 {
      font-size: 26px;
    }
  `}
`;
