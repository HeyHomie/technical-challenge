import { useEffect, useState, FC } from 'react'
import { getUser, getRepos } from 'api'
import { useParams } from 'react-router-dom'
import { IRepository, IUser } from 'types'

const Home: FC = () => {
  const { username } = useParams<{ username: string }>()
  const [User, setUser] = useState<IUser>()
  const [Repos, setRepos] = useState<Array<IRepository>>([])

  useEffect(() => {
    Promise.all([getUser(username), getRepos(username)]).then(
      ([user, repos]) => {
        setUser(user)
        setRepos(repos)
      }
    )
  }, [username])

  if (!User || !Repos) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>{User.login}</h1>
      {Repos.map((r) => (
        <h2 key={r.id}>{r.name}</h2>
      ))}
    </>
  )
}

export default Home
