import { FC } from 'react'

const Layout: FC = ({ children }) => {
  return (
    <div className="dark">
      <div className="w-screen min-h-screen text-primary bg-primary">
        {children}
      </div>
    </div>
  )
}

export default Layout
