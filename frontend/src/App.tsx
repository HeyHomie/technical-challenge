import * as React from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Tabs from './Components/Tabs/Tabs'
import Profile from './Components/Profile/Profile'
import Filters from './Components/Filters/Filters'
import CardContainer from './Components/CardContainer/CardContainer'

import { AppRouter } from './routes'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <Navbar />
        <Tabs />
      </header>
      <main className='main-container'>
        <aside>
          <Profile />
        </aside>
        <section className='main-content'>
          <Filters />
          <CardContainer />
        </section>
      </main>
      <AppRouter />
    </>
  )
}

export default App
