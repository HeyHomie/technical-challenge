import React from 'react'
import { followersInterface } from '../../interfaces/Followers'
import './ItemFollower.css'

export const ItemFollower = ({ login, avatar_url }: followersInterface) => {
  return (
    <div className="item-follower">
      <div className="avatar-container">
        <a href="">
          <img src={avatar_url} alt="" className="avatar avatar-user" />
        </a>
      </div>
      <div className="info">
        <a href="">
          <span>{login}</span>
        </a>
      </div>
      <div>
        <span className="btn">Follow</span>
      </div>
    </div>
  )
}
