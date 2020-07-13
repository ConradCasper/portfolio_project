import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import SEO from '../components/seo';

const BlogPostItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content:center;
    justify-content: center;
    align-self: center;
    text-align: center;
    width: 100%
`

const BlogImage = styled.img`
    width: 100%;
`


export default ({ pageContext }) => (
    <Layout>
        <SEO title={pageContext.title} />
            <BlogPostItemsWrapper>
                <BlogImage src={pageContext.featured_media.source_url} />
                <h1>{pageContext.title}</h1>
                
                <small>{pageContext.date}</small>
                <p dangerouslySetInnerHTML={{__html: pageContext.content}}></p>
            </BlogPostItemsWrapper>
    </Layout>
)