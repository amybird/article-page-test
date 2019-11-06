import React from 'react';
import { Article } from './styles';
import { data } from '../../data/article';
import HeroImage from '../../components/HeroImageWithText';
import StickyImageWithText from '../../components/StickyImageWithText';

const articleData = data.content;

const ArticlePage = () => (
  <Article>
    <HeroImage data={articleData[0]} />
    <StickyImageWithText data={articleData[1]} />
    <StickyImageWithText data={articleData[2]} />
  </Article>
);

export default ArticlePage;
