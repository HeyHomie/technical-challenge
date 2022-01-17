import * as React from 'react'
import { AppRouter } from './routes'
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
      <AppRouter />
      <button onClick={switchTheme} className='button-switch__theme'>
        {theme === 'light' ? (
          <i className='fas fa-2x fa-moon' />
        ) : (
          <i className='fas fa-2x fa-sun' />
        )}
      </button>
    </div>
  )
}

export default App
