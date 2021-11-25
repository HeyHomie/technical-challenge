import React from 'react'
import { RepoList } from '../../container/RepoList'
import { useFetchData } from '../../hooks/useFetchData'

export const Userpage = (): JSX.Element => {
  const state = useFetchData()
  console.log(state)

  return <RepoList {...state} />
}
