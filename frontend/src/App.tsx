import * as React from 'react'
import { AppRouter } from './routes'
import Navbar from './Components/Navbar/Navbar'
import Tabs from './Components/Tabs/Tabs'
import Footer from './Components/Footer/Footer'
import useLocalStorage from 'use-local-storage'
import './App.scss'

const App: React.FC = (): JSX.Element => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const switchTheme = (): void => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div data-theme={theme} className='components'>
      <header>
        <Navbar />
        <div className='tabs-desktop__container'>
          <Tabs />
        </div>
      </header>
      <AppRouter />
      <button onClick={switchTheme} className='button-switch__theme'>
        Dark/Light mode
      </button>
      <Footer />
    </div>
  )
}

export default App
