import React from 'react'
import './layout.css'

const Layout: React.FC = ({ children }) => {
  return <div className="layout grid">{children}</div>
}

export default Layout
