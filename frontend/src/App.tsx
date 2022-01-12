import * as React from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Tabs from './Components/Tabs/Tabs'
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
        <section>Repository list</section>
      </main>
      <AppRouter />
    </>
  )
}

export default App
