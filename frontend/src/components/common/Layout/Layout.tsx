import { FC } from 'react'

const Layout: FC = ({ children }) => {
  return (
    <div className="dark">
      <div className="w-screen min-h-screen text-black bg-white dark:bg-gray-900 dark:text-gray-100">
        {children}
      </div>
    </div>
  )
}

export default Layout
