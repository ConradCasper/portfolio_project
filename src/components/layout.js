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
  position: relative;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
  padding: 1em;
  border-radius: .28571429rem;
  border: 1px solid rgba(34,36,38,.15);
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
