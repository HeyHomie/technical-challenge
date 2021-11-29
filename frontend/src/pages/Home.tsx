import { useEffect, useState, FC } from 'react'
import { getUser, getRepos } from 'api'
import { useParams } from 'react-router-dom'
import { IRepository, IUser } from 'types'
import { UserCard } from 'components/ui'

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
    <main className="flex flex-col px-4 mt-6 sm:flex-row">
      <aside className="w-full sm:max-w-[256px] md:max-w-[296px] mt-4">
        <UserCard user={User} />
      </aside>
      <div className="w-full">
        {Repos.map((r) => (
          <h2 key={r.id}>{r.name}</h2>
        ))}
      </div>
    </main>
  )
}

export default Home
