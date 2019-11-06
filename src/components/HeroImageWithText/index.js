import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from '../ResponsiveImage';
import {
  HeroImageWrap, ImageWrap, Overlay, TextOverlay
} from './styles';

const HeroImageWithText = ({ data }) => {
  const [isScrollTop, setIsScrollTop] = useState(false);
  const heroImageWrap = useRef(null);
  const articleData = data.content;

  const handleScroll = () => {
    const topPos = (heroImageWrap.current.getBoundingClientRect().top + 50);
    if (topPos < 0 && isScrollTop === false) {
      setIsScrollTop(true);
    } else if (topPos > 0 && isScrollTop === true) {
      setIsScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <HeroImageWrap ref={heroImageWrap}>
      <ImageWrap>
        <ResponsiveImage smallImg={articleData.images.small} largeImg={articleData.images.large} />
      </ImageWrap>
      <Overlay className={isScrollTop ? 'fade-out' : 'fade-in'} />
      <TextOverlay>
        <div className={isScrollTop ? 'fade-out' : 'fade-in'}>
          <span>{articleData.text.articleType}</span>
          <h1>{articleData.text.articleName}</h1>
          <h3><i>with</i></h3>
          <h3>{articleData.text.featuring}</h3>
        </div>
      </TextOverlay>
    </HeroImageWrap>
  );
};

HeroImageWithText.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      images: PropTypes.shape({
        small: PropTypes.string.isRequired,
        large: PropTypes.string.isRequired
      }).isRequired,
      text: PropTypes.shape({
        articleType: PropTypes.string.isRequired,
        articleName: PropTypes.string.isRequired,
        featuring: PropTypes.string.isRequired
      }).isRequired
    })
  }).isRequired
};

export default HeroImageWithText;
