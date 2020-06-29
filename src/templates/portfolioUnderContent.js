import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems'
import styled from 'styled-components';

const ProfileImage = styled.img`
    max-width: 235px;
    margin: 0;
    padding: 0px 16px 16px 0px;
    float: left;
`

export default ({ pageContext }) => (
    <Layout>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div>
        <ProfileImage src={pageContext.featured_media.source_url} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
        </div>
        <PortfolioItems />
    </Layout>
)