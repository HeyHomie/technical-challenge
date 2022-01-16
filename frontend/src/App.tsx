import * as React from 'react'
import { AppRouter } from './routes'
import Navbar from './Components/Navbar/Navbar'
import Tabs from './Components/Tabs/Tabs'
import Footer from './Components/Footer/Footer'
import './App.scss'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <Navbar />
        <div className='tabs-desktop__container'>
          <Tabs />
        </div>
      </header>
      <AppRouter />
      <Footer />
    </>
  )
}

export default App
