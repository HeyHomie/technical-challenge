import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { User } from '../../../api/models'

import { UserInfoContainer, UserPhoto, Button } from './styles'

interface UserInfoProps {
  user: User
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <UserInfoContainer className='UserInfo'>
      <UserPhoto src={user?.avatar_url} alt={user?.name} />
      <h2 className='name'>{user?.name}</h2>
      <span className='user-name'>{}</span>
      <Button href='https://github.com/login'>Follow</Button>
      <p className='biography'>{user?.bio}</p>
      <div>
        <p className='followers'>
          <FaUsers /> {user?.followers} followers -
        </p>
        <p>{user?.following} following - </p>
        <p>
          <AiOutlineStar /> stars
        </p>
      </div>
      <p className='company'>Company: {user?.company}</p>
      <p>Location: {location}</p>
      <p>Blog: {user?.blog}</p>
      <p>Highlights</p>
    </UserInfoContainer>
  )
}

export default UserInfo
