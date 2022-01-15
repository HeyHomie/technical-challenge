import * as React from 'react'
import { AppRouter } from './routes'
import Navbar from './Components/Navbar/Navbar'
import Tabs from './Components/Tabs/Tabs'
import './App.scss'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <Navbar />
        <Tabs />
      </header>
      <AppRouter />
    </>
  )
}

export default App
