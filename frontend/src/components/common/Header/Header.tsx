import {
  ThreeBarsIcon,
  MarkGithubIcon,
  BellIcon,
  PlusIcon,
  ChevronDownIcon,
  PersonIcon
} from '@primer/octicons-react'

const Header = () => (
  <header className="h-16 sm:h-[60px] p-4 bg-secondary text-sm">
    <div className="flex items-center justify-between sm:hidden">
      <ThreeBarsIcon size={24} />
      <MarkGithubIcon size={32} />
      <BellIcon size={24} />
    </div>
    <div className="items-center justify-between hidden sm:flex">
      <div className="flex items-center gap-4">
        <MarkGithubIcon size={32} />
        <input
          className="input max-w-[15.5rem]"
          placeholder="Search or jump to..."
        />
        <ul className="flex gap-4 font-bold">
          <li>
            <a href="https://github.com/pulls">Pulls</a>
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
          <ChevronDownIcon size={10} className="my-auto" />
        </div>
        <div className="flex items-center">
          <PersonIcon size={20} className="border rounded-full" />
          <ChevronDownIcon size={10} />
        </div>
      </div>
    </div>
  </header>
)

export default Header
