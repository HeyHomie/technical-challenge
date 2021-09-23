import React from 'react'

import { FooterContainer } from './styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ul>
        <li>C 2021 GitHub, Inc.</li>
        <li>
          <a href='https://docs.github.com/en/github/site-policy/github-terms-of-service'>
            Terms
          </a>
        </li>
        <li>
          <a href='https://docs.github.com/en/github/site-policy/github-privacy-statement'>
            Privacy
          </a>
        </li>
        <li>
          <a href='https://github.com/security'>Security</a>
        </li>
        <li>
          <a href='https://www.githubstatus.com/'>Status</a>
        </li>
        <li>
          <a href='https://docs.github.com'>Docs</a>
        </li>
        <li>
          <a href='https://github.com'>Logo</a>
        </li>
        <li>
          <a href='https://support.github.com/?tags=dotcom-footer'>
            Contact GitHub
          </a>
        </li>
        <li>
          <a href='https://github.com/pricing'>Pricing</a>
        </li>
        <li>
          <a href='https://docs.github.com'>API</a>
        </li>
        <li>
          <a href='https://services.github.com/'>Training</a>
        </li>
        <li>
          <a href='https://github.blog/'>Blog</a>
        </li>
        <li>
          <a href='https://github.com/about'>About</a>
        </li>
      </ul>
    </FooterContainer>
  )
}

export default Footer
