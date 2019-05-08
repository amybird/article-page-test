import React from 'react';
import Paragraph from '../../../ui/Paragraph';
import ResponsiveImage from '../../../ui/ResponsiveImage';
import Container from '../../../ui/Container';
import mq from '../../../styles/mediaQueries';
import styled, {css} from 'styled-components/macro';
import Quote from '../../../ui/Quote';
import shortId from 'shortid';

class StickyImageWithText extends React.PureComponent { 

    render() {
       const { image, paragraphs, quote, imageLeft } = this.props[0];
       
        return (
            <Container my={20}>
                    {imageLeft && <ImageWrap><ResponsiveImage smallImg={image}/></ImageWrap>}
                    <Paragraphs>
                        {paragraphs.map( (paragraph, index)=> 
                            <Paragraph key={shortId.generate() } largeFirstLetter={index === 0 ? true : false}>{paragraph}</Paragraph>
                        )}
                        <Quote quote={quote}/>
                    </Paragraphs>
                    {!imageLeft && <ImageWrap><ResponsiveImage smallImg={image}/></ImageWrap>}         
            </Container>
        )
    }
}

const ImageWrap = styled.div`
    width:100%;
    top:5px;
    display:inline-block;

    ${mq.medium(css`
        margin-top:70px;
        padding: 20px;
        position:sticky;
        width:50%;
        vertical-align: top;
    `)}
`;

const Paragraphs = styled.div`
    width:100%;
    display:inline-block;
    padding: 20px 10px;

    ${mq.medium(css`
        width:50%;
    `)}
`;

export default StickyImageWithText;