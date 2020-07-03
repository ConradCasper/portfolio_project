import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import SiteInfo from './Siteinfo'

const MainMenuWrapper = styled.div`
    display: flex;
    background-color: white;
    box-shadow: 0px -4px 26px 2px rgba(194,194,194,1);
`

const MainMenuInner = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    // width: 960px;
    height: 100%;
    align-items: center;
    padding: 0 16px 0 0;
`

const MenuItem = styled(Link)`
    color: #728792;
    display: block;
    padding: 8px 16px;
    text-decoration: none;
`

const MainMenu = () => (
    <StaticQuery query={graphql`
    {
        allWordpressWpApiMenusMenusItems(filter: {
          name: {
            eq:"Main Menu"
          }
        }){
          edges{
            node{
              name
              items{
                title
                object_slug
              }
            }
          }
        }
      }
    `} render={props => (
        <MainMenuWrapper>
            <MainMenuInner>
          
            <SiteInfo/>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                <MenuItem to={`/${item.object_slug}`} key={item.title}>
                    {item.title}
                </MenuItem>
            ))}
            </MainMenuInner>
        </MainMenuWrapper>
    )}/>
)

export default MainMenu;