import React from 'react';
import Layout from '../components/layout';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

const FadeIn = styled.div`
animation: 5s ${fadeIn} ease-out;
`

// const ProfileImage = styled.img`
//     max-width: 235px;
//     margin: 0;
//     padding: 0px 16px 16px 0px;
//     float: left;
// `

const ContentContainer = styled.div`
    max-width: 650px;
   
    margin: auto;
    text-align: center;
`

const Content = styled.h1`
    display: inline-block;
`


export default ({ pageContext }) => (
    <Layout>
        <FadeIn>
            <ContentContainer>
                <Content dangerouslySetInnerHTML={{__html: pageContext.content}}/>
            </ContentContainer>
        </FadeIn>
    </Layout>
)