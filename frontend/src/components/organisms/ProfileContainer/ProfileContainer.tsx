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
  return (
    <Wrapper>
      <Profile className='ProfileContainer'>
        <UserInfo user={user} />
        <div className='Repos'>
          {repositories?.length > 0 &&
            repositories.map((repo) => (
              <RepositoryCard key={repo?.id} repository={repo} />
            ))}
        </div>
      </Profile>
    </Wrapper>
  )
}

export default ProfileContainer
