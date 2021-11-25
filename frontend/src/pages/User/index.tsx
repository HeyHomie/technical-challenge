import React from 'react'
import { RepoList } from '../../container/RepoList'
import { useFetchData } from '../../hooks/useFetchData'
import { TabBar } from '../../components/TabBar'
import { ProfileSection } from '../../container/ProfileSection'

export const Userpage = (): JSX.Element => {
  const state = useFetchData()
  console.log(state)

  return (
    <>
      <ProfileSection />
      <TabBar />
      <RepoList {...state} />
    </>
  )
}
