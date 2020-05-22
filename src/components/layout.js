import React from "react";
import MainMenu from './MainMenu';
import styled, {createGlobalStyle} from 'styled-components';



const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

  body{
    font-family: 'Open Sans', sans_serif;
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
