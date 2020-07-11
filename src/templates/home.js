import React from 'react';
import Layout from '../components/layout';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import SEO from '../components/seo';

const headerFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

const contentFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

const taglineFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    
    100% {
        opacity: 1;
    }
`

const contactFadeIn = keyframes`
    0% {
        opacity: 0;
        
    }
    
    100% {
        opacity: 1;
        
    }
`





const ContentContainer = styled.div`
    max-width: 650px;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
    

const Header = styled.h1`
    margin-bottom: 0;
    font-size: 100px;
    color: white;
    animation: 2s ${headerFadeIn} ease-out;

    @media (max-width: 768px) {
        font-size: 50px;
    }
    
`

const Content = styled.div`
    font-size: 50px;
    color: white;
    margin: 0;
    animation: 2s ${contentFadeIn} ease-out;

    @media (max-width: 768px) {
        font-size: 25px;
    }
    
    p {
        margin: 0;
    }
`
const Tagline = styled.p`
    font-size: 25px;
    color: white;
    margin: 0;
    animation: 2s ${taglineFadeIn};
    animation-delay: 2.5s;
    animation-fill-mode: backwards;
    padding: 25px 25px;
    

    @media (max-width: 768px) {
        font-size: 12.5px;
    }
`

const TaglineContactContainer = styled.div`
    height: 75px;
    display: flex;
    justify-content: center;
`


const Contact = styled(Link)`
    color: white;
    font-size: 25px;
    padding: 25px 25px;

    animation: 2s ${contactFadeIn};
    animation-delay: 4s;
    animation-fill-mode: backwards;

    @media (max-width: 768px){
        font-size: 12.5px;
    }
`


export default ({ pageContext }) => (
    <Layout>
        <SEO title="Home" />
            <ContentContainer>
                <Header dangerouslySetInnerHTML={{__html: pageContext.acf.header}}/>
                <Content dangerouslySetInnerHTML={{__html: pageContext.content}} />
                <TaglineContactContainer>
                    <Tagline dangerouslySetInnerHTML={{__html:pageContext.acf.tagline}} />
                    <Contact to="/contact">Contact me.</Contact>
                </TaglineContactContainer>
            </ContentContainer>
    
    </Layout>
)