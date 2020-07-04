import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';


const NavItemWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    // width: 100%
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        z-index: 10;
    }
`;

const NavItem = styled(Link)`
    color: #728792;
    display: block;
    padding: 8px 16px;
    text-decoration: none;
`


const RightNav = ({ open }) => (
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
        <NavItemWrapper open={open}>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
            
            <NavItem to={`/${item.object_slug}`} key={item.title}>
                {item.title}
            </NavItem>

        ))}
        </NavItemWrapper>
        
        )}/>
        
)

export default RightNav;