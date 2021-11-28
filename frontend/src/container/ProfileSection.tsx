import React, { FunctionComponent } from 'react'

interface Props {
  data: any[]
}

interface ProfileData {
  avatar_url: string
  avatarUrl: string
  name: string
  bio?: string
  company?: string
  email?: string
  location?: string
  blog?: string
  twitter_username?: string
  twitterUsername?: string
}

export const ProfileSection: FunctionComponent<Props> = ({ data }) => {
  const { data: profileData } = data.find((item: any) => item.type === 'users')
  const {
    avatar_url: avatarUrl,
    name,
    bio,
    company,
    email,
    location,
    blog,
    twitter_username: twitterUsername
  }: ProfileData = profileData

  console.log(profileData)

  return (
    <div className='ProfileSection--container'>
      <section className='ProfileSection__header'>
        <img src={avatarUrl} alt='' />
        <div>
          <h2>{name}</h2>
          <p>{bio}</p>
        </div>
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
        <div className='ProfileSection__header--data' />
      </section>
    </div>
  )
}
