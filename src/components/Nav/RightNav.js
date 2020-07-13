import React, { Fragment } from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import ContactWidget from '../ContactWidget'





const animatedgradient = keyframes`
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
`


const NavItemWrapper = styled.div`

    max-width: 960px;
    display: flex;
    flex-flow: row nowrap;

    
    
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        padding-top: 10rem;
        transition: transform 0.3s ease-in-out;
        z-index: 10;
        background: rgba(29, 31, 32, 1);



        a{
            color: white;
            text-align: right;
            align-self: flex-end;
            width: auto;
            padding: 16px 50px;
            text-decoration: none;
            font-size: 20px;
            text-align: center;
        }

        .gradient-border {
          --borderWidth: 1px;
          background: #1D1F20;
          position: relative;
          border-radius: var(--borderWidth);
          visibility: ${({ open }) => open ? 'visible' : 'hidden'};
        }
        .gradient-border:after {
          content: '';
          position: absolute;
          top: calc(-1 * var(--borderWidth));
          left: calc(-1 * var(--borderWidth));
          height: calc(100% + var(--borderWidth) * 2);
          width: 100%;
          background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
          border-radius: calc(2 * var(--borderWidth));
          z-index: -1;
          animation: ${animatedgradient} 3s ease alternate infinite;
          background-size: 300% 300%;
        }

        
    }
`;



const NavItem = styled(Link)`
  color: #728792;
  display: block;
  padding: 8px 16px;
  text-decoration: none;
`



const RightNav = ({ open, setOpen }) => (
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

              item.object_slug === 'home' ? 
                <Fragment key={item.title}>
                  <div className="gradient-border" />
                  <NavItem to={`/${item.object_slug}`}  className="home" onClick={() => setOpen(!open)}>
                    {item.title}
                  </NavItem>
                  <div  className="gradient-border" />
                </Fragment>
              : 
                <Fragment key={item.title}>
                  <NavItem to={`/${item.object_slug}`} onClick={() => setOpen(!open)} >
                    {item.title}
                  </NavItem>
                  <div  className="gradient-border" />
                </Fragment>
            
            ))}
            <ContactWidget />
            </NavItemWrapper>
            
            )}/>
            
)
    
    export default RightNav;
            
            
