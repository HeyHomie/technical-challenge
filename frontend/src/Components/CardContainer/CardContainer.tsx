import * as React from 'react'
import { useState, useEffect, useMemo, ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'
import type { AxiosResponse } from 'axios'
import axios from 'axios'
import RepositoryCard from './RepositoryCard'
import Filters from '../Filters/Filters'
import '../Filters/Filters.scss'

const CardContainer: React.FC = () => {
  const [search, setSearch] = useState('')
  const [repositoryList, setRepositoryList] = useState([])
  const { username } = useParams<{ username: string }>()

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(function (response: AxiosResponse) {
        if (response.status === 200) {
          return setRepositoryList(response.data)
        }
      })
      .catch(function (error: AxiosResponse) {
        return console.log(error)
      })
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    return setSearch(e.target.value)
  }

  const repositories = useMemo(() => {
    return repositoryList.filter((e: { name: string }) => {
      if (e.name.toString().toLowerCase().includes(search.toLowerCase())) {
        return e
      }
    })
  }, [search, repositoryList])

  return (
    <div>
      <Filters value={search} onChange={handleChange} />

      {repositories.map((repos: any, index: number) => {
        return (
          <RepositoryCard
            description={repos.description}
            fork={repos.fork}
            forks={repos.forks}
            forksUrl={repos.forks_url}
            key={repos.id}
            language={repos.language}
            name={repos.name}
            isPrivate={repos.private}
            updatedAt={repos.updated_at}
          />
        )
      })}
    </div>
  )
}

export default CardContainer
