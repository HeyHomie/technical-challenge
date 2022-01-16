import * as React from 'react'
import { useState, useEffect, useMemo, ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'
import type { AxiosResponse } from 'axios'
import axios from 'axios'
import RepositoryCard from './RepositoryCard'
import Filters from '../Filters/Filters'
import Pagination from './Pagination'
import '../Filters/Filters.scss'
import Tabs from '../Tabs/Tabs'

const Repositories: React.FC = () => {
  const [search, setSearch] = useState('')
  const [repositoryList, setRepositoryList] = useState([])
  const [repositoriesIsLoading, setRepositoriesIsLoading] = useState(false)
  const { username } = useParams<{ username: string }>()
  const [page, setPage] = useState(1)
  const [perPage] = useState(10)
  useEffect(() => {
    setRepositoriesIsLoading(true)
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(function (response: AxiosResponse) {
        if (response.status === 200) {
          setRepositoryList(response.data)
          setRepositoriesIsLoading(false)
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

  const limitPerPage = repositoryList.length / perPage

  return (
    <>
      {repositoriesIsLoading ? (
        <div className='repositories__loading'>
          <p>Loading repositories...</p>
        </div>
      ) : (
        <div>
          <div className='tabs-mobile__container'>
            <Tabs />
          </div>
          <Filters value={search} onChange={handleChange} />

          {repositories
            .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
            .map((repos: any, index: number) => {
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
          <div className='pagination'>
            <Pagination
              page={page}
              setPage={setPage}
              limitPerPage={limitPerPage}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Repositories
