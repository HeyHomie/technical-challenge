import React, { FunctionComponent } from 'react'
import { SearchBar } from '../components/SearchBar'
import { RepoCard } from '../components/RepoCard'
import { Loading } from '../components/Loading'
import { Error } from '../components/Error'

interface Props {
  data: any[]
  loading: boolean
  error: boolean
}

export const RepoList: FunctionComponent<Props> = ({
  data,
  loading,
  error
}) => {
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const { data: repoData } = data.find(
    (item: any) => item.type === 'repositories'
  )
  console.log(repoData[2])

  return (
    <div className='repoList__container'>
      <SearchBar />
      {repoData.map((item: any) => (
        <RepoCard key={item.id} {...item} />
      ))}
    </div>
  )
}
