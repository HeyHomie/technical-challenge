import React from 'react'
import './styles.css'

export const Footer = (): JSX.Element => {
  return (
    <div className='Footer--container'>
      <div className='Footer__info'>
        <a href='https://docs.github.com/en/github/site-policy/github-terms-of-service'>
          <p>Terms</p>
        </a>
        <a href='https://docs.github.com/en/github/site-policy/github-privacy-statement'>
          <p>Privacy</p>
        </a>
        <a href='https://github.com/security'>
          <p>Security</p>
        </a>
        <a href='https://www.githubstatus.com/'>
          <p>Status</p>
        </a>
        <a href='https://docs.github.com/es'>
          <p>Docs</p>
        </a>
        <a href='https://support.github.com/?tags=dotcom-footer'>
          <p>Contact</p>
        </a>
        <a href='https://github.com/pricing'>
          <p>Pricing</p>
        </a>
        <a href='https://docs.github.com/es'>
          <p>API</p>
        </a>
        <a href='https://services.github.com/'>
          <p>Training</p>
        </a>
        <a href='https://github.blog/'>
          <p>Blog</p>
        </a>
        <a href='https://github.com/about'>
          <p>About</p>
        </a>
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
