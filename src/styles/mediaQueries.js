import { css } from 'styled-components/macro';

export const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200
};

const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  const prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:';
  const suffix = typeof breakpoints[label] === 'string' ? '' : 'px';
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `;
  return accumulator;
}, {});

export default mq;
