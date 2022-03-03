import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserInfo, getRespositories } from '../helpers/requests'

// Components
import { Header } from '../components/Header/Header'
import { menuHeader, menuLayout, footerOptions } from '../constants/constants'
import { LayoutMain } from '../components/LayoutMain/LayoutMain'
import { ListRepositories } from '../components/ListRepositories/ListRepositories'
import { Footer } from '../components/Footer/Footer'
import { Dashboard } from '../components/Dashboard/Dashboard'
import { Profile } from '../components/Profile/Profile'

// Styles
import './Main.css'

// interfaces
import { profileInterface } from '../interfaces/Profile'

export const Main = () => {
  const { username } = useParams<{ username: string }>()
  const [User, setUser] = useState<any>({})
  const [Repos, setRepos] = useState<Array<any>>([])

  useEffect(() => {
    getUserInfo(username).then((resp: profileInterface) => {
      setUser(resp)
    })
  }, [username])

  useEffect(() => {
    getRespositories(username).then((resp) => {
        console.log('Repos: ',resp);
      setRepos(resp)
    })
  }, [User])

  return (
    <>
      <Header menu={menuHeader} />
      <LayoutMain menu={menuLayout} />
      <div className="layout-divider"></div>
      <Dashboard>
        <Profile {...User} />
        <ListRepositories repos={Repos} />
      </Dashboard>
      <Footer options={footerOptions} />
    </>
  )
}
