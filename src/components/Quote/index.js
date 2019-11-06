import React from 'react';
import PropTypes from 'prop-types';
import { QuoteText } from './styles';

const Quote = ({ text }) => (
  <QuoteText>{text}</QuoteText>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired
};

export default Quote;
