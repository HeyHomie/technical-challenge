import React from 'react'
import RepositoryCard from '../../molecules/RepositoryCard/RepositoryCard'
import UserInfo from '../../molecules/UserInfo/UserInfo'
import { Repository, User } from '../../../api/models'

import { Profile } from './styles'
import { Wrapper } from '../../../styles/shared'

interface ProfileContainerProps {
  user: User
  repositories: Repository[]
}

const ProfileContainer: React.FC<ProfileContainerProps> = ({
  user,
  repositories
}) => {
  const [queryString, setQueryString] = React.useState('')
  const [searched, setSearched] = React.useState(false)

  const handleOnChange: any = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.target.value)
    setQueryString(e.target.value)
    setSearched(true)
  }

  const filteredRepositories = repositories.filter((repo: Repository) => {
    return repo.name.toLowerCase().includes(queryString.toLowerCase())
  })

  React.useEffect(() => {
    if (queryString.length === 0) {
      setSearched(false)
    }
  }, [queryString])

  return (
    <Wrapper>
      <Profile className='ProfileContainer'>
        <UserInfo user={user} />
        <div className='Repos'>
          <div>
            <ul>
              <li>Overview</li>
              <li>Repositories</li>
              <li>Projects</li>
              <li>Packages</li>
            </ul>
          </div>
          <div>
            <div>
              <p>Search bar</p>
              <input
                type='text'
                placeholder='Find a repository'
                onChange={handleOnChange}
              />
            </div>
            <span>Type</span>
            <span>Language</span>
            <span>Sort</span>
            <span>New</span>
          </div>
          {!searched
            ? repositories?.length > 0 &&
              repositories.map((repo) => (
                <RepositoryCard key={repo?.id} repository={repo} />
              ))
            : filteredRepositories?.length > 0 &&
              filteredRepositories.map((repo) => (
                <RepositoryCard key={repo?.id} repository={repo} />
              ))}
        </div>
      </Profile>
    </Wrapper>
  )
}

export default ProfileContainer
