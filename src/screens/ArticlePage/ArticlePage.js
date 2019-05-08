import React, { Component } from 'react';
import styled from 'styled-components/macro';
import ArticleData from '../../data/article'
import shortId from 'shortid';
import HeroImage from './components/HeroImageWithText';
import Paragraph from '../../ui/Paragraph';
import Quote from '../../ui/Quote';
import StickyImageWithText from './components/StickyImageWithText';

const ARTICLE_COMPONENTS = { 
    HeroImage,
    Paragraph,
    StickyImageWithText,
    Quote
}

class ArticlePage extends Component {

    chooseComponentType (type, ...props) { 
        const Component = ARTICLE_COMPONENTS[type];
        return <Component {...props} key={shortId.generate()}/>;
    }
    
    render() {

        return(
            <Article>
                {ArticleData.content.map((item, index) => (
                    this.chooseComponentType(item.contentType, item.content)
                ))}
            </Article>
        )
    }
}

const Article = styled.div`
    padding-top:200px;
`;

export default ArticlePage;