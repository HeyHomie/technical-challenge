import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserInfo, getFollowers } from '../../helpers/requests'

// Components
import { Header } from '../../components/Header/Header'
import {
  menuHeader,
  menuLayout,
  footerOptions
} from '../../constants/constants'
import { LayoutMain } from '../../components/LayoutMain/LayoutMain'
import { Footer } from '../../components/Footer/Footer'
import { Dashboard } from '../../components/Dashboard/Dashboard'
import { Profile } from '../../components/Profile/Profile'

// Styles
import '../Main.css'

// interfaces
import { profileInterface } from '../../interfaces/Profile'
import { followersInterface } from '../../interfaces/Followers'
import { ListFollowers } from '../../components/ListFollowers/ListFollowers'

export const Followers = () => {
  const { username } = useParams<{ username: string }>()
  const [User, setUser] = useState<profileInterface>()
  const [Followers, setFollowers] = useState<Array<followersInterface>>([])
  const [layoutmenu, setLayoutmenu] = useState<any>(menuLayout)

  useEffect(() => {
    getUserInfo(username).then((resp: profileInterface) => {
      setUser(resp)
    })
  }, [username])

  useEffect(() => {
    getFollowers(username).then((resp) => {
      console.log('followers: ', resp)
      setFollowers(resp)
    })
    configLayout()
  }, [User])

  const configLayout = () => {
    let aux = [...layoutmenu]
    aux[1].counter = User?.public_repos
    aux[1].active = false
    setLayoutmenu(aux)
  }

  return (
    <>
      <Header menu={menuHeader} />
      <LayoutMain menu={menuLayout} />
      <div className="layout-divider"></div>
      <Dashboard>
        {User ? <Profile {...User} /> : ''}
        <ListFollowers followers={Followers}/>
      </Dashboard>
      <Footer options={footerOptions} />
    </>
  )
}
