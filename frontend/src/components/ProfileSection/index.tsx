import React, { FunctionComponent } from 'react'
import './styles.css'

interface Props {
  data: any[]
}

interface ProfileData {
  avatar_url: string
  avatarUrl: string
  name: string
  login: string
  bio?: string
  company?: string
  email?: string
  location?: string
  blog?: string
  twitter_username?: string
  twitterUsername?: string
  followers: number
  followers_url: string
  followersUrl: string
  following: number
  following_url: string
  followingUrl: string
}

export const ProfileSection: FunctionComponent<Props> = ({ data }) => {
  const { data: profileData } = data.find((item: any) => item.type === 'users')
  const {
    avatar_url: avatarUrl,
    name,
    login,
    bio,
    company,
    email,
    location,
    blog,
    followers,
    followers_url: followersUrl,
    following,
    following_url: followingUrl,
    twitter_username: twitterUsername
  }: ProfileData = profileData

  console.log(profileData)

  return (
    <div className='ProfileSection--container'>
      <section className='ProfileSection__header'>
        <div className='ProfileSection__header--avatar'>
          <img src={avatarUrl} alt='' />
          <div>
            <h2>{name}</h2>
            <p>{login}</p>
          </div>
        </div>
        <p>{bio}</p>
      </section>

      <section className='ProfileSection__body'>
        <p>{company}</p>
        <p>{location}</p>
        <p>{email}</p>
        <p>
          <a href={blog}>{blog}</a>
        </p>
        {twitterUsername != null && (
          <p>
            <a href={`https://twitter.com/${twitterUsername}`}>
              @{twitterUsername}
            </a>
          </p>
        )}
      </section>
      <section className='ProfileSection__footer'>
        <p>
          <a href={followersUrl}>{` ${followers} followers · `} </a>
        </p>
        <p>
          {' '}
          <a href={followingUrl}>{` ${following} following · `} </a>{' '}
        </p>
      </section>
    </div>
  )
}
