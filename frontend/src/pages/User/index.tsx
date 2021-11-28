import React from 'react'
import { RepoList } from '../../container/RepoList'
import { useFetchData } from '../../hooks/useFetchData'
// import { TabBar } from '../../components/TabBar'
import { ProfileSection } from '../../components/ProfileSection'
import { Miniloader } from '../../components/Miniloader'
import { Error } from '../../components/Error'

export const Userpage = (): JSX.Element => {
  const state = useFetchData()
  const { loading, error }: { loading: boolean, error: boolean } = state
  console.log(state)

  if (loading) {
    return <Miniloader />
  }

  if (error) {
    return <Error />
  }

  return (
    <>
      <ProfileSection {...state} />
      {/* <TabBar /> */}
      <RepoList {...state} />
    </>
  )
}
