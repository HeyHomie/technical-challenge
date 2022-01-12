import * as React from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import { AppRouter } from './routes'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        <Profile />
      </main>
      <AppRouter />
    </>
  )
}

export default App
