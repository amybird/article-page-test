import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './styles';

const Container = ({ children }) => (
  <Box>{children}</Box>
);

Container.defaultProps = {
  children: null
};

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
