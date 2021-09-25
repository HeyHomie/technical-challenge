import React from 'react'
import { useParams } from 'react-router'
import RepositoryCard from '../../molecules/RepositoryCard/RepositoryCard'
import UserInfo from '../../molecules/UserInfo/UserInfo'
// import { User } from '../../../api/models'

import { Profile } from './styles'
import { Wrapper } from '../../../styles/shared'

const ProfileContainer: React.FC = () => {
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

    Promise.all([userPromise, reposPromise])
      .then(() => {
        console.log('All promises resolved!')
      })
      .catch((err) => {
        console.log(err)
      })
  }, [username])

  return (
    <Wrapper>
      <Profile className='ProfileContainer'>
        <UserInfo user={user} />
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
