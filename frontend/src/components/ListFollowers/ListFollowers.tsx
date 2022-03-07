import React from 'react'
import { followersInterface } from '../../interfaces/Followers'
import { ItemFollower } from '../ItemFollower/ItemFollower'
import './ListFollowers.css'

interface Props {
  followers: Array<followersInterface>
}

export const ListFollowers = ({ followers }: Props) => {
  return (
    <div className='list-followers'>
      {followers.map((item) => (
        <ItemFollower key={item.id} {...item}/>
      ))}
    </div>
  )
}
