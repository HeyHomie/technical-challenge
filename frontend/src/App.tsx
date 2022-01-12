import * as React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { AppRouter } from './routes'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  )
}

export default App
