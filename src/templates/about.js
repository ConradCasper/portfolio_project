import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled, { keyframes } from 'styled-components';

// const headerFadeIn = keyframes`
//     0% {
//         opacity: 0;
//         transform: translateX(100px);
//     }
//     100% {
//         opacity: 1;
//         transform: translateX(0);
//     }
// `

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



// const ProfileImage = styled.img`
//     max-width: 235px;
//     margin: 0;
//     padding: 0px 16px 16px 0px;
//     float: left;
// `

const ContentContainer = styled.div`
    max-width: 650px;
    backspace-visibility: hidden;
    margin: 0 auto;
    text-align: center;
`

// const Header = styled.h1`
//     margin-bottom: 0;
//     font-size: 50px;
//     animation: 2s ${headerFadeIn} ease-out;
    
// `

const Content = styled.div`
    font-size: 25px;
    margin: 0;
    animation: 2s ${contentFadeIn} ease-out;
    
    p {
        margin-top: 0;
    }
`


export default ({ pageContext }) => {

    return (
    
    <Layout>
        <SEO title="About" />
            <ContentContainer>
                {/* <Header dangerouslySetInnerHTML={{__html: pageContext.acf.header}}/> */}
                <Content dangerouslySetInnerHTML={{__html: pageContext.content}} />
            </ContentContainer>
    
    </Layout>
    )
}