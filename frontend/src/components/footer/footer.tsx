import React from 'react'
import './footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div>&copy; {new Date().getFullYear()} Github, Inc</div>
      <nav>
        <ul>
          <li>
            <a href="#">terms</a>
          </li>
          <li>
            <a href="#">privacy</a>
          </li>
          <li>
            <a href="#">security</a>
          </li>
          <li>
            <a href="#">status</a>
          </li>
          <li>
            <a href="#">docs</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <a href="#">contact github</a>
          </li>
          <li>
            <a href="#">pricing</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">training</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
