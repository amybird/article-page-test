import React, {Component} from 'react';
import ResponsiveImage from '../../../ui/ResponsiveImage';
import styled, {css} from 'styled-components/macro';
import mq from '../../../styles/mediaQueries';

class HeroImage extends Component {
    state = { 
        isScrollTop: false
    }
    heroImageWrap = React.createRef();
    parallaxText = React.createRef();
    image = React.createRef();

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }

    parallax() {        
        const parallaxEl = window.innerWidth < 767 ? this.parallaxText.current : this.image.current;
        const yPos = (window.innerWidth < 767 ? 0 : -50) - window.pageYOffset/(window.innerWidth < 767 ? 40 : 8);	
        parallaxEl.style.top = 50 + yPos + "%";
    }

    handleScroll = () => { 
        const topPos = this.heroImageWrap.current.getBoundingClientRect().top;

        if (topPos < 1 && this.state.isScrollTop === false){
            this.setState({
                isScrollTop: true
            })
        } else if (topPos > 0 && this.state.isScrollTop === true) { 
            this.setState({
                isScrollTop: false
            })
        }

        this.parallax()
    }

    render() {
        const data = this.props[0];
        const { isScrollTop } = this.state;

        return (
            <HeroImageWrap ref={this.heroImageWrap}>
                <ImageWrap ref={this.image}>
                    <ResponsiveImage smallImg={data.images.small} largeImg={data.images.large} />
                </ImageWrap>
                <Overlay className={isScrollTop ? 'fade-out' : 'fade-in'}/>
                <TextOverlay ref={this.parallaxText} >
                    <div className={isScrollTop ? 'fade-out' : 'fade-in'}>
                        <span>{data.text.articleType}</span>
                        <h1>{data.text.articleName}</h1>
                        <h3><i>with</i></h3>
                        <h3>{data.text.featuring}</h3>
                    </div>
                </TextOverlay>
            </HeroImageWrap>
        )
    }
}

const HeroImageWrap = styled.div`
    position:relative;

    .fade-in { 
        visibility: visible;
        opacity: 1;
        transition: opacity .3s linear;
    }

    .fade-out { 
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 0.3s, opacity 0.3s linear;
    }

    ${mq.medium(css`
        height:500px;
        overflow:hidden;
    `)}
`;

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position:absolute;
    top:0;
`;

const ImageWrap = styled.div`
    ${mq.medium(css`
        position:absolute;
    `)}
`;

const TextOverlay = styled.div`
    position: absolute; 
    color: white;
    width: 100%;
    top:50%;
    padding:0 30px;
    * {
        font-weight:lighter;
    }

    span { 
        text-transform: uppercase;
        letter-spacing:1px;
        font-size: 10px;
    }

    h1 { 
        margin:0;
        text-transform:uppercase;
        font-family:serif;
        font-size: 30px;
    }

    h3 { 
        margin:0;
        text-align:right;
        font-family:serif;
    }

    ${mq.medium(css`
        padding:0  0 0;
        div { 
            max-width:1080px;
            margin:0 auto;
            height: 100%;
            /* padding: 250px 0 0; */
        }
        span { 
            font-size:16px;
        }
        h1 { 
            font-size: 70px;
            letter-spacing: 2px;
        }
        h3 { 
            font-size:26px;
        }

    `)}

`;



export default HeroImage;