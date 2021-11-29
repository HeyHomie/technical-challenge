import React from 'react'
import { RepoList } from '../../container/RepoList'
import { useFetchData } from '../../hooks/useFetchData'
import { ProfileSection } from '../../components/ProfileSection'
import { Miniloader } from '../../components/Miniloader'
import { Error } from '../../components/Error'
import './styles.css'

export const Userpage = (): JSX.Element => {
  const state = useFetchData()
  const { loading, error }: { loading: boolean, error: boolean } = state

  if (loading) {
    return <Miniloader />
  }

  if (error) {
    return <Error />
  }

  return (
    <div className='User--container body-container'>
      <ProfileSection {...state} />
      <RepoList {...state} />
    </div>
  )
}
