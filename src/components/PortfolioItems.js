import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

const PortfolioItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const PortfolioItem = styled.div`
    max-width: 750px;
    box-shadow: 
       inset 0 -3em 3em rgba(0,0,0,0.1), 
             0.3em 0.3em 1em rgba(0,0,0,0.3);
    padding: 18px;
    margin: 16px;
    border-radius: 15px;
    align-self: center;
    background: rgba(0, 0, 0, 0.5);
`

const PortfolioImage = styled.img`
    max-width: 100%;
`

const ReadMoreLink = styled(Link)`
  text-decoration: none;
  background: red;
  color: white;
  border-radius: 50px;
  padding: 5px 5px;
`

const PortfolioItems = () => {
    return (
        <StaticQuery query={graphql`
        {
            allWordpressWpPortfolio {
              edges{
                node{
                    id
                  title
                  excerpt
                  content
                  slug
                  featured_media {
                    source_url
                  }
                }
              }
            }
          }
        `} render={props => (
          <PortfolioItemsWrapper>
            {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
                <PortfolioItem key={portfolioItem.node.id}>
                    <h2>{portfolioItem.node.title}</h2>
                    <PortfolioImage src={portfolioItem.node.featured_media.source_url} alt="Thumbnail" /> 
                    <div dangerouslySetInnerHTML={{__html: portfolioItem.node.excerpt}}/>
                    <ReadMoreLink to={`/portfolio/${portfolioItem.node.slug}`}>
                        Read more
                    </ReadMoreLink>
                </PortfolioItem>
            ))}
          </PortfolioItemsWrapper>)}/>
    )
}


export default PortfolioItems;