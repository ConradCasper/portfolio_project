import React from 'react';
import styled from 'styled-components';
import LeftNav from './LeftNav';
import Burger from './Burger';

const NavBarWrapper = styled.div`
    display: flex;
    background-color: white;
    box-shadow: 0px -4px 26px 2px rgba(194,194,194,1);
    height: 65px;
`

const NavBarInner = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`



const NavBar = () => (
  
  <NavBarWrapper>
    <NavBarInner>
      <LeftNav/>
      <Burger />
    </NavBarInner>
  </NavBarWrapper>
)
      
    
          
          
export default NavBar;
          
          
          