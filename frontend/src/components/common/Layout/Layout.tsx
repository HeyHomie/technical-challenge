import { FC } from 'react'
import { Header, Footer } from 'components/common'

const Layout: FC = ({ children }) => {
  return (
    <div className="dark">
      <div className="w-screen min-h-screen max-w-[100%] text-primary bg-secondary sm:bg-primary">
        <Header />
        <main
          className="max-w-screen-xl min-h-full px-4 mx-auto md:px-9"
          style={{ scrollbarColor: 'transparent' }}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
