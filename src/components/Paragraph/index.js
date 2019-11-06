import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './styles';

const Paragraph = ({ largeFirstLetter, children }) => (
  <Text largeFirstLetter={largeFirstLetter}>{children}</Text>
);

Paragraph.defaultProps = {
  largeFirstLetter: false
};

Paragraph.propTypes = {
  largeFirstLetter: PropTypes.bool,
  children: PropTypes.string.isRequired
};

export default Paragraph;
