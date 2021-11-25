import React, { FunctionComponent } from 'react'
import { TabBar } from '../components/TabBar'
import { SearchBar } from '../components/SearchBar'
import { RepoCard } from '../components/RepoCard'

export const RepoList: FunctionComponent = ({ data }: any) => {
  return (
    <div className='repoList__container'>
      <TabBar />
      <SearchBar />
      <RepoCard />
    </div>
  )
}
