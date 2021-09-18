import React from 'react'
import './layout.css'

type LayoutProps = {
  children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="layout grid">{children}</div>
}

export default Layout
