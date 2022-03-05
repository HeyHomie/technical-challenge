import React, { useEffect, useState } from 'react'
import './ListRepositories.css'
import { FormSearch } from '../FormSearch/FormSearch'
import { ItemResult } from '../ItemResult/ItemResult'
import { filterSearch } from '../../helpers/filterSearch'
import { reposInterface } from '../../interfaces/Repos'

interface Props {
  repos: Array<reposInterface>
}
export const ListRepositories = ({ repos }: Props) => {
  const [Repos, setRepos] = useState<Array<any>>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    setRepos(repos)
  }, [repos])

  useEffect(() => {
    if (search !== '') {
      setRepos(filterSearch(Repos, search))
    } else {
      setRepos(repos)
    }
  }, [search])

  const handleChangeInput = (e: any) => {
    const { value } = e.target
    setSearch(value)
  }

  return (
    <div className="repositories-results">
      <FormSearch handleChange={handleChangeInput} value={search} />

      <div className="results">
        <ul>
          {Repos.map((item: any, index: number) => (
            <ItemResult key={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  )
}
