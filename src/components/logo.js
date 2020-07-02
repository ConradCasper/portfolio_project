import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';


const SiteLogo = styled.img`
    width: 35px;
    height: 35px;
`


const Logo = () => (
    <StaticQuery query={graphql`
    {
        allWordpressWpFavicon{
          edges{
            node{
              url{
                source_url
              }
            }
          }
        }
      }
    `} render={props => (
    //   <div>
        <SiteLogo src={props.allWordpressWpFavicon.edges[0].node.url.source_url} alt="logo" />
    //   </div>
    )} />
);

export default Logo;
