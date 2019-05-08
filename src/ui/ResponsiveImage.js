import React from 'react';
import PropTypes from 'prop-types';
import { breakpoints } from '../styles/mediaQueries';

const ResponsiveImage = ({smallImg, largeImg, imgAlt}) => (
  <picture>
    {largeImg && <source srcSet={largeImg} media={`(min-width: ${breakpoints.medium}px)`} />}
    <img alt={imgAlt} src={smallImg}/>
  </picture>
);

ResponsiveImage.propTypes = {
    smallImg: PropTypes.string.isRequired
};

export default ResponsiveImage;