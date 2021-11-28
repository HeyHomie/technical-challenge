import React, { FunctionComponent, useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { RepoCard } from '../components/RepoCard'

interface Props {
  data: any[]
}

export const RepoList: FunctionComponent<Props> = ({ data }) => {
  const [search, setSearch] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setSearch(value)
  }

  const { data: repoData } = data.find(
    (item: any) => item.type === 'repositories'
  )

  const filteredRepos: object[] = repoData.filter((item: any) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='RepoList__container'>
      <SearchBar handleChange={handleChange} />
      {filteredRepos.map((item: any) => (
        <RepoCard key={item.id} {...item} />
      ))}
    </div>
  )
}
