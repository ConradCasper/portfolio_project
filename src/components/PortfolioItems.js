import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled, { keyframes } from 'styled-components';

const PortfolioItemsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content:center;
    justify-content: center;
    align-self: center;
`

const portfolioItemFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

const readMoreFillIn = keyframes`
    0% {
        background: rgba(0,0,0, 0.3);
    }
    
    100% {
        background: red;
    }
`

const PortfolioItem = styled.div`
    max-width: 750px;
    height: auto;
    box-shadow: 
       inset 0 -3em 3em rgba(0,0,0,0.1), 
             0.3em 0.3em 1em rgba(0,0,0,0.3);
    padding: 18px;
    margin: 16px;
    border-radius: 15px;
    align-self: center;
    background: rgba(0, 0, 0, 0.5);
    animation: 1s ${portfolioItemFadeIn} linear;
`

const PortfolioImage = styled.img`
    max-width: 100%;
`

const ReadMoreLink = styled(Link)`
  text-decoration: none;
  background: #8B0000;
  color: white;
  border-radius: 5px;
  padding: 8px 8px;

  &:hover {
    animation: 0.3s ${readMoreFillIn} linear forwards;
    -webkit-box-shadow: inset 0px 1px 22px 1px rgba(255,255,255,0.29);
    -moz-box-shadow: inset 0px 1px 22px 1px rgba(255,255,255,0.29);
    box-shadow: inset 0px 1px 22px 1px rgba(255,255,255,0.29);
  }

  @media (max-width: 768px){
    background: rgba(255, 150, 0, 1);
  }
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