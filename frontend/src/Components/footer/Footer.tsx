import './footer.css';
import {BsGithub} from 'react-icons/bs'

const Footer = (props: any) => {
  return (
    <footer className="footer">
       <div className="footer__copy">
        <p className="copyright">© 2021 GitHub, Inc.</p>
         <ul className="footer__navigation">
          <li>
            <a className="footer__link" href="https://docs.github.com/en/github/site-policy/github-terms-of-service">Terms</a>
          </li>
          <li>
            <a className="footer__link" href="https://docs.github.com/en/github/site-policy/github-privacy-statement">Privacy</a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/security">Security</a>
          </li>
          <li>
            <a className="footer__link" href="https://docs.github.com/es">Docs</a>
          </li>
        </ul>
       </div>
        <div>
         <BsGithub className="footer__logo"/>
        </div>
        <ul className="footer__navigation">
          <li>
            <a className="footer__link" href="https://support.github.com/?tags=dotcom-footer">Github</a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/pricing">Pricing</a>
          </li>
          <li>
            <a className="footer__link" href="https://docs.github.com/es">API</a>
          </li>
          <li>
            <a className="footer__link" href="https://services.github.com/">Training</a>
          </li>
          <li>
            <a className="footer__link" href="https://github.blog/">Blog</a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/about">About</a>
          </li>
        </ul>

    </footer>
  )
}

export default Footer
