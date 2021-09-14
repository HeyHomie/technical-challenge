import React from 'react'
import './Header.css'
import {
  ChevronDownIcon,
  MarkGithubIcon,
  ThreeBarsIcon
} from '@primer/octicons-react'

export function Header() {
  return (
    <header className="header">
      <div className="mobile-nav">
        <a href="https://github.com/">
          <MarkGithubIcon size={32} />
        </a>
        <div className="auth-mobile">
          <a href="https://github.com/signup">Sign up</a>
          <button
            aria-label="Toggle navigation"
            aria-expanded="false"
            type="button">
            <ThreeBarsIcon size={24} />
          </button>
        </div>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            Why Github? <ChevronDownIcon size={16} />
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Enterprise</a>
          </li>
          <li>
            Explore <ChevronDownIcon size={16} />
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            Pricing <ChevronDownIcon size={16} />
          </li>
        </ul>
      </nav>
      <div className="auth-desktop">
        <a href="#">Sign in</a>
        <a href="#" className="button">
          Sign up
        </a>
      </div>
    </header>
  )
}
