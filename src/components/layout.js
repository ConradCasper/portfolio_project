import React from "react"
import MainMenu from './MainMenu'






const Layout = ({ children }) => (
  <div>
    <MainMenu/>
    {children}
  </div>
)


export default Layout
