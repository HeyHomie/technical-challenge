import * as React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import { AppRouter } from './routes'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Profile />
      <AppRouter />
    </>
  )
}

export default App
