import * as React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import type { AxiosResponse } from 'axios'
import RepositoryCard from './RepositoryCard'

const CardContainer: React.FC = () => {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    axios
      .get('https://api.github.com/users/lukas/repos')
      .then(function (response: AxiosResponse) {
        if (response.status === 200) {
          setRepositories(response.data)
        }
      })
      .catch(function (error: AxiosResponse) {
        console.log(error)
      })
  }, [setRepositories])

  return (
    <div>
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
