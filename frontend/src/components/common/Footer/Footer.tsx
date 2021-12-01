import { MarkGithubIcon } from '@primer/octicons-react'

const Footer = () => (
  <footer className="bottom-0 flex h-[7.25rem] items-center text-center justify-start px-4 text-xs border-t border-accent-br mt-10">
    <span className="flex items-center w-1/6 ">
      <MarkGithubIcon size={24} className="mr-2 text-fg-subtle" />
      <span className="text-secondary">© 2021 GitHub, Inc.</span>
    </span>
    <ul className="flex flex-wrap justify-between w-2/3 text-accent-fg">
      <li>
        <a href="https://docs.github.com/en/github/site-policy/github-terms-of-service">
          Terms
        </a>
      </li>
      <li>
        <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement">
          Privacy
        </a>
      </li>
      <li>
        <a href="https://github.com/security">Security</a>
      </li>
      <li>
        <a href="https://www.githubstatus.com/">Status</a>
      </li>
      <li>
        <a href="https://docs.github.com">Docs</a>
      </li>
      <li>
        <a href="https://support.github.com/?tags=dotcom-footer">
          Contact GitHub
        </a>
      </li>
      <li>
        <a href="https://github.com/pricing">Pricing</a>
      </li>
      <li>
        <a href="https://docs.github.com">API</a>
      </li>
      <li>
        <a href="https://services.github.com/">Training</a>
      </li>
      <li>
        <a href="https://github.blog/">Blog</a>
      </li>
      <li>
        <a href="https://github.com/about">About</a>
      </li>
    </ul>
  </footer>
)

export default Footer
