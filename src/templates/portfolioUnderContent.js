import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems'
import styled from 'styled-components';
import SEO from '../components/seo';
const ProfileImage = styled.img`
    max-width: 235px;
    margin: 0;
    padding: 0px 16px 16px 0px;
    float: left;
`

// const ContentWrapper = styled.div`
//     max-width: 650px;
//     margin: 0 auto;
//     text-align: center;
//     width: 100%;
//     // 
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     /* bring your own prefixes */
//     transform: translate(-50%, -50%);
// `

export default ({ pageContext }) => (
    <Layout>
        <SEO title={pageContext.title} /> 
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        
        <ProfileImage src={pageContext.featured_media.source_url} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
        <PortfolioItems />
    </Layout>
)