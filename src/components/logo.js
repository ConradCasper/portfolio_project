import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';


const SiteLogo = styled.img`
    width: 35px;
    height: 35px;
    padding: 0 16px;
`
const HomeLink = styled(Link)`

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
