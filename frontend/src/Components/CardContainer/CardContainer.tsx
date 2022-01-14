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
        {Object.entries(repoData).map((repo: any, index: Number) => {
          console.log(repo)
          return <RepositoryCard key={index} name={repo[1].name} />
        })}
      </div>
    </React.StrictMode>
  )
}

export default CardContainer
