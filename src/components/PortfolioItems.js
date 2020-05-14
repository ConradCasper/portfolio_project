import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';


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
                  featured_media {
                    source_url
                  }
                }
              }
            }
          }
        `} render={props => props.allWordpressWpPortfolio.edges.map(portfolioItem => (
            <div key={portfolioItem.id}>
                <h2>{portfolioItem.node.title}</h2>
                <img src={portfolioItem.node.featured_media.source_url} alt="Thumbnail" /> 
                <div dangerouslySetInnerHTML={{__html: portfolioItem.node.excerpt}}/>
                <Link to={`/portfolio/${portfolioItem.node.slug}`}>
                    Read more
                </Link>
            </div>
        ))}/>
    )
}


export default PortfolioItems;