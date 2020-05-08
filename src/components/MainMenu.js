import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const MainMenuWrapper = styled.div`
    display: flex;
    background-color: rgb(3, 27, 77);
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
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                <Link to={item.object_slug} key={item.title}>
                    {item.title}
                </Link>
            ))}
        </MainMenuWrapper>
    )}/>
)

export default MainMenu;