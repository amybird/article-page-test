import React from 'react';
import { Box } from 'rebass';
import { css } from 'styled-components/macro';

const Container = props => (
  <Box
    {...props}
    mx="auto"
    css={css`
      width: 100%;
      max-width: 1080px;
    `}
  />
);

export default Container;
