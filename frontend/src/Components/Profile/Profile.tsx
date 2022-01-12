import * as React from 'react'
import '../Profile/Profile.scss'

const Profile: React.FC = () => {
  return (
    <React.StrictMode>
      <div className='container_aside'>
        <div className='container_aside-avatar'>
          <a href='/'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/147/147144.png'
              alt=''
              width='260px'
              height='260px'
            />
          </a>
        </div>
        <div className='container_aside-names'>
          <h1 className='container_aside-names__name'>Profile Name</h1>
          <h2 className='container_aside-names__username'>Profile Username</h2>
        </div>
        <div className='container_aside-information'>
          <div className='container_aside-information__description'>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </span>
          </div>
          <div className='container_aside-information__button'>
            <button>Edit Profile</button>
          </div>
          <div className='container_aside-information__follow'>
            <a
              className='container_aside-information__follow_followers'
              href='/'
            >
              <svg
                aria-hidden='true'
                height='18'
                viewBox='0 0 16 16'
                version='1.1'
                width='18'
                data-view-component='true'
                className='octicon octicon-people'
              >
                <path
                  fillRule='evenodd'
                  d='M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z'
                />
              </svg>
              <span className=''>14</span> followers
            </a>
            <a
              className='container_container_aside-information__follow_following'
              href='/'
            >
              <span className=''>12</span>following
            </a>
          </div>
          <div className='container_container_aside-information__location'>
            <svg
              className='octicon octicon-location'
              viewBox='0 0 16 16'
              version='1.1'
              width='18'
              height='18'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z'
              />
            </svg>
            <span>Location, User</span>
          </div>
        </div>
        <div className='container_aside-achievements'>
          <h3>Achievements</h3>
          <a href='https://archiveprogram.github.com/'>
            <img
              src='https://github.githubassets.com/images/modules/profile/badge--acv-64.png'
              alt='Achievements'
              width='64px'
            />
          </a>
        </div>
        <div className='container_aside-highlights'>
          <h3>Highlights</h3>
          <div>
            <svg
              aria-hidden='true'
              height='18'
              viewBox='0 0 16 16'
              version='1.1'
              width='18'
              data-view-component='true'
              className='octicon octicon-star UnderlineNav-octicon hide-sm'
            >
              <path
                fillRule='evenodd'
                d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z'
              />
            </svg>
            <span>PRO</span>
          </div>
        </div>
      </div>
    </React.StrictMode>
  )
}

export default Profile
