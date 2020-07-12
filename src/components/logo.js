import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';


const SiteLogo = styled.img`
    width: 35px;
    height: 35px;
    margin: 0 0 0 16px;
    border-radius: 3px;
`
const HomeLink = styled(Link)`
  max-height: 35px;
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
      <HomeLink to="/home">
        <SiteLogo src={props.allWordpressWpFavicon.edges[0].node.url.source_url} alt="logo" />
      </HomeLink>
    )} />
);

export default Logo;
