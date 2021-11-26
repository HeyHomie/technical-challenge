import React from 'react'
import './styles.css'

export const Footer = (): JSX.Element => {
  return (
    <div className='Footer--container'>
      <div className='Footer__info'>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Security</p>
        <p>Status</p>
        <p>Docs</p>
        <p>Contact</p>
        <p>Pricing</p>
        <p>API</p>
        <p>Training</p>
        <p>Blog</p>
        <p>About</p>
      </div>
      <div className='Footer__logo'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
          alt='GitHub Logo'
        />
        <span>© 2021 GitHub, Inc.</span>
      </div>
    </div>
  )
}
