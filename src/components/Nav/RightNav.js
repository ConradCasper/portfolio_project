import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';


const NavItemWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100%;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        z-index: 10;
        background: rgb(15,15,15);
        background: linear-gradient(312deg, rgba(15,15,15,1) 0%, rgba(89,89,89,1) 48%, rgba(240,240,245,1) 100%);

        a{
            color: white;
            align-self: center;
            width: 50%;
            border-bottom: 2px solid black;
            padding: 16px 32px;
            text-decoration: bold;
            font-family: Arial;
            font-size: 35px;
        }
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