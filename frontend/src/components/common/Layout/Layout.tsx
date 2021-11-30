import { FC } from 'react'
import { Header } from 'components/common'

const Layout: FC = ({ children }) => {
  return (
    <div className="dark">
      <div className="w-screen min-h-screen text-primary bg-primary">
        <Header />
        <main className="container mx-auto px-9">{children}</main>
      </div>
    </div>
  )
}

export default Layout
