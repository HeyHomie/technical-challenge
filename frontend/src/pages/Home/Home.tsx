import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Home.css'
import { getRepositoriesByUser } from '../../services/Home'

export const Home: React.FunctionComponent = () => {
  const { username } = useParams<{ username: string }>()
  const [repositories, setRepositories] = useState<Array<any>>([])

  useEffect(() => {
    getRepositoriesByUser(username, 'updated')
      .then((res) => {
        setRepositories(res)
      })
      .catch((error) => {
        throw new Error('Something went wrong');
      })
  }, [username])

  return (
    <main className="main-app">
      <div className="list-container">
        <div className="search-input-container">
          <input type="text" placeholder="Find a repository..." />
        </div>
        <ul>
          {repositories.map((repository) => {
            return (
              <li key={repository.id}>
                <div>
                  <div>
                    <h3>
                      <a href="#">{repository.name}</a>
                      <span>{repository.private ? 'Private' : 'Public'}</span>
                    </h3>
                  </div>
                  {repository.description ? (
                    <div>
                      <p>{repository.description}</p>
                    </div>
                  ) : null}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
