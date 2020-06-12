import React from "react";
import MainMenu from './MainMenu';
import styled, {createGlobalStyle} from 'styled-components';



const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Avenir Next', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu/>
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
    
  </div>
)


export default Layout
