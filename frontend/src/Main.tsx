import React from 'react'
import { useParams } from 'react-router-dom'
import User from '../src/api/models/User'
import Repository from '../src/api/models/Repository'

const Main: React.FC = () => {
  const { username } = useParams<{ username: string }>()
  const [user, setUser] = React.useState<User>(Object)
  const [repos, setRepos] = React.useState<Repository[]>([])

  React.useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`)
    ])
      .then(async ([user, repos]) => {
        setUser(await user.json())
        setRepos(await repos.json())
      })
      .catch((err: Response) => console.log(err))
  }, [username])

  return (
    <>
      <h1>{user.login}</h1>
      {repos.map((r) => (
        <h2 key={r.id}>{r.name}</h2>
      ))}
    </>
  )
}

export default Main
