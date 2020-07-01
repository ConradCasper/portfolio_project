import React from "react";
import MainMenu from './MainMenu';
import styled, {createGlobalStyle} from 'styled-components';
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from 'gatsby';


const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Avenir Next', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
    background: white;
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  background: #fff;
  padding: 1em;
  box-shadow: 2px 2px 2px 3px rgba(34,36,38,.15);
  // border-radius: .28571429rem;
  // border: 1px solid rgba(34,36,38,.15);
`

const Layout = ({ children }) => (
  <>
    
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
    `} render={props => <Helmet><link rel="icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} /></Helmet>} />
    <GlobalStyles />
    <MainMenu/>
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
    
  </>
)


export default Layout
