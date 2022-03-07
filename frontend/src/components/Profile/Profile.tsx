import React from 'react'
import { profileInterface } from '../../interfaces/Profile'
import { Link } from 'react-router-dom'

import './Profile.css'

export const Profile = ({
  name,
  login,
  bio,
  location,
  email,
  avatar_url,
  blog,
  followers,
  following,
  followers_url,
  following_url
}: profileInterface) => {
  return (
    <div className="profile">
      <div className="about">
        <a href="">
          <img src={avatar_url} className="avatar" />
        </a>
      </div>
      <div className="info">
        <h1>
          <p className="fullname">{name}</p>
          <p className="username">{login}</p>
        </h1>
      </div>
      <div>
        <a href="" className="btn btn-block">
          Follow
        </a>
      </div>
      <div className="user-profile-bio">{bio}</div>
      {(following !== 0 || followers !== 0) && (
        <div className="followers">
          {followers !== 0 && (
            <Link to={`/followers/${login}`}>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-people">
                <path
                  fill-rule="evenodd"
                  d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
              </svg>
              <span>{followers}</span> followers
            </Link>
          )}
          {following !== 0 && (
            <>
              {' '}
              ·
              <a href={following_url}>
                <span> {following}</span> following
              </a>
            </>
          )}
        </div>
      )}
      <div className="user-contact">
        <ul>
          <li>
            <svg
              className="octicon octicon-location"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
            <span>{location}</span>
          </li>
          {email && (
            <li>
              <svg
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
                className="dark:fill-github-dark-link align-text-bottom inline-block overflow-visible">
                <path
                  fillRule="evenodd"
                  d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path>
              </svg>
              <span>{email}</span>
            </li>
          )}
          <li>
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="octicon octicon-link">
              <path
                fillRule="evenodd"
                d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>
            <span>
              <a href="">{blog}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
