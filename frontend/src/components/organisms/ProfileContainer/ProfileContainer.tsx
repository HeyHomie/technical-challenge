import React from 'react'
import { useParams } from 'react-router'
import { Profile } from './styles'
import { Wrapper } from '../../../styles/shared'
import RepositoryCard from '../../molecules/RepositoryCard/RepositoryCard'

const ProfileContainer: React.FC = () => {
  console.log('ProfileContainer')
  const { username } = useParams<{ username: string }>()
  const [user, setUser] = React.useState<any>({})
  const [repos, setRepos] = React.useState<any[]>([])

  React.useEffect(() => {
    const userPromise = new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${username}`)
        .then(async (response) => await response.json())
        .then((data) => {
          setUser(data)
          resolve(data)
          console.log('User promise resolved!')
        })
        .catch((err) => {
          reject(err)
        })
    })

    const reposPromise = new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${username}/repos`)
        .then(async (response) => await response.json())
        .then((data) => {
          setRepos(data)
          resolve(data)
          console.log('Repos promise resolved!')
        })
        .catch((err) => {
          reject(err)
        })
    })

    console.log({ userPromise })
    userPromise
      .then((data) => {
        console.log({ data })
      })
      .catch((err) => {
        console.log({ err })
      })

    reposPromise
      .then((data) => {
        console.log({ data })
      })
      .catch((err) => {
        console.log({ err })
      })

    console.log('use effect')
  }, [username])

  return (
    <Wrapper>
      <Profile className='ProfileContainer'>
        <div className='UserInfo'>
          <img src={user?.avatar_url} alt={user?.name} />
          <h3>{user?.name}</h3>
          <p>{user?.login}</p>
          <button>Follow</button>
          <p>Bio: {user?.bio}</p>
          <p>Followers: {user?.followers}</p>
          <p>Following: {user?.following}</p>
          <p>stars</p>
          <p>Company: {user?.company}</p>
          <p>Location: {user?.location}</p>
          <p>Blog: {user?.blog}</p>
          <p>Highlights</p>
        </div>
        <div className='Repos'>
          <h1>Repository list</h1>
          {repos?.length > 0 &&
            repos.map((repo) => (
              <RepositoryCard
                key={repo?.id}
                description={repo?.description}
                forksCount={repo?.forks_count}
                language={repo?.language}
                license={repo?.license}
                name={repo?.name}
                pushedAt={repo?.pushedAt}
                stargazersCount={repo?.stargazers_count}
              />
            ))}
        </div>
      </Profile>
    </Wrapper>
  )
}

export default ProfileContainer
