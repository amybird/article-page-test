import React from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph';
import ResponsiveImage from '../ResponsiveImage';
import Container from '../Container';
import Quote from '../Quote';
import { ImageWrap, Paragraphs } from './styles';

const StickyImageWithText = ({ data }) => {
  const {
    image, paragraphs, quote, imageLeft
  } = data.content;

  return (
    <Container>
      {imageLeft && (
      <ImageWrap>
        <ResponsiveImage smallImg={image} />
      </ImageWrap>
      )}
      <Paragraphs>
        {paragraphs.map((paragraph, index) => (
          <Paragraph
            key={shortId.generate()}
            largeFirstLetter={index === 0}
          >
            {paragraph}
          </Paragraph>
        ))}
        <Quote text={quote} />
      </Paragraphs>
      {!imageLeft && (
      <ImageWrap>
        <ResponsiveImage smallImg={image} />
      </ImageWrap>
      )}
    </Container>
  );
};

StickyImageWithText.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      image: PropTypes.string.isRequired,
      paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
      quote: PropTypes.string.isRequired,
      imageLeft: PropTypes.bool.isRequired
    })
  }).isRequired
};

export default StickyImageWithText;
