import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled, { keyframes } from 'styled-components';

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

const imgFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    
    100% {
        opacity: 1;
    }
`



const ProfileImage = styled.img`
    max-width: 100%;
    align-self: center;
    animation: 2s ${imgFadeIn} linear;
`

const ContentContainer = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: auto;
    align-content: center;
    justify-content: center;
    align-self: center;
`

const Header = styled.h1`
    font-size: 40px;
    animation: 2s ${headerFadeIn} ease-out;
    align-self: center
`

const Content = styled.div`
    font-size: 20px;
    margin: 0;
    animation: 2s ${contentFadeIn} ease-out;
    
    // p {
    //     margin-top: 0;
    // }
`


export default ({ pageContext }) => {

    return (
    
    <Layout>
        <SEO title="About" />
            <ContentContainer>
                <Header dangerouslySetInnerHTML={{__html: pageContext.title}}/>
                <ProfileImage src={pageContext.featured_media.source_url} />
                <Content dangerouslySetInnerHTML={{__html: pageContext.content}} />
            </ContentContainer>
    
    </Layout>
    )
}