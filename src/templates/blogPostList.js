import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';

const BlogPostItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content:center;
    justify-content: center;
    align-self: center;
    width: 100%
`

const BlogPost = styled.div`
    max-width: 750px;
    box-shadow: 
    inset 0 -3em 3em rgba(0,0,0,0.1), 
            0.3em 0.3em 1em rgba(0,0,0,0.3);
    padding: 18px;
    margin: 16px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    align-self: center;
`

const BlogImage = styled.img`
    width: 100%;
`

const Pagination = styled.div`
    display: flex;
    justify-content: flex-end;
`

const PageNumberWrapper = styled.div`
    background: ${props => props.isCurrentPage ? 'rgba(0, 0, 0, 0.5)' : 'none'};

    &:hover{
        background: ${props => props.isCurrentPage ? 'rgba(0, 0, 0, 0.5)' : 'none'};
        background: rgba(155, 0, 0, 0.5);
    }
`
    

const Divider = styled.div`
    height: 1px;
    width: 90%;
    background-color: grey;
    margin: 0 auto;
`

const Date = styled.div`
    font-size: 19px;
    margin-top: 10px;
`

const BlogLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:hover {
        color: rgba(155, 0, 0, 0.5);
    }
`

const PageNumber = styled(Link)`
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: ${props => props.isCurrentPage ? 'black' : 'white'}
`

export default ({ pageContext }) => (
    <Layout>
        <SEO title="Blog"/> 
        <BlogPostItemsWrapper>
            {pageContext.posts.map(post => (
                <BlogPost key={post.node.wordpress_id}>
                    <BlogLink to={`/post/${post.node.slug}`}>
                        <BlogImage src={post.node.featured_media.source_url} />
                    </BlogLink>
                    <BlogLink to={`/post/${post.node.slug}`}>
                        <h2 dangerouslySetInnerHTML={{__html: post.node.title}}/>
                    </BlogLink>
                    <Divider />
                    <p dangerouslySetInnerHTML={{__html: post.node.excerpt }} />
                    <Date>
                        {post.node.date}
                    </Date>
                </BlogPost>
            ))}
            <Pagination>
                {Array.from({length: pageContext.numberOfPages}).map((page, index) => (
                    <PageNumberWrapper key={index} isCurrentPage={index + 1 === pageContext.currentPage}>
                        <PageNumber to={index === 0 ? `/blog` : `/blog/${index + 1}`}>
                        {index + 1}
                        </PageNumber>
                    </PageNumberWrapper>
                ))}
            </Pagination>
         </BlogPostItemsWrapper>
    </Layout>
)