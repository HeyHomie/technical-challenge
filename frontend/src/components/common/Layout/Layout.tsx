import { FC } from 'react'
import { Header } from 'components/common'

const Layout: FC = ({ children }) => {
  return (
    <div className="dark">
      <div className="w-screen min-h-screen text-primary bg-primary">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout
