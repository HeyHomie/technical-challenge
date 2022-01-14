import * as React from 'react'
import { useState, useEffect } from 'react'
import RepositoryCard from './RepositoryCard'
import axios from 'axios'

const CardContainer: React.FC = () => {
  const [repoData, setRepoData] = useState<any>({})

  useEffect(() => {
    axios
      .get('https://api.github.com/users/lukas/repos')
      .then(function (response: any) {
        console.log(response)
        setRepoData(response.data)
      })
      .catch(function (error: string) {
        console.log(error)
      })
  }, [setRepoData])

  return (
    <React.StrictMode>
      <div>
        {Object.entries(repoData).map((repo: any, index: any) => {
          console.log(repo)
          return (
            <RepositoryCard
              key={index}
              name={repo[1].name}
              description={repo[1].description}
              language={repo[1].language}
              updated_at={repo[1].updated_at}
              fork={repo[1].fork}
              forks={repo[1].forks}
            />
          )
        })}
      </div>
    </React.StrictMode>
  )
}

export default CardContainer
