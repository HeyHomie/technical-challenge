import {
  ThreeBarsIcon,
  MarkGithubIcon,
  BellIcon,
  PlusIcon,
  TriangleDownIcon,
  PersonIcon
} from '@primer/octicons-react'
import { useHistory } from 'react-router-dom'
import { useRef } from 'react'

const Header = () => {
  const history = useHistory()
  const searchRef = useRef<HTMLInputElement>(null)

  return (
    <header className="h-16 md:h-[60px] p-4 lg:px-8 md:px-6 bg-secondary text-sm text-header">
      <div className="flex items-center justify-between md:hidden">
        <ThreeBarsIcon size={24} />
        <MarkGithubIcon size={32} />
        <a href="github.com/notifications">
          <BellIcon size={16} />
        </a>
      </div>
      <div className="items-center justify-between hidden md:flex">
        <div className="flex items-center w-full gap-4">
          <MarkGithubIcon size={32} />
          <div className="flex">
            <input
              className="input min-w-[15.5rem] max-w-[17rem] w-full"
              placeholder="Search or jump to..."
              ref={searchRef}
            />
            <button
              className="w-auto btn"
              onClick={() => history.push(searchRef?.current?.value || '/')}>
              /{' '}
            </button>
          </div>
          <ul className="flex gap-4 font-bold break-words">
            <li>
              <a href="https://github.com/pulls">Pull Requests</a>
            </li>
            <li>
              <a href="https://github.com/issues">Issues</a>
            </li>
            <li>
              <a href="https://github.com/marketplace">Marketplace</a>
            </li>
            <li>
              <a href="https://github.com/explore">Explore</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <BellIcon size={16} />
          <div className="flex items-center">
            <PlusIcon size={16} />
            <TriangleDownIcon size={16} />
          </div>
          <div className="flex items-center">
            <PersonIcon size={20} className="border rounded-full" />
            <TriangleDownIcon size={16} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
