import {
  BookIcon,
  RepoIcon,
  ProjectIcon,
  PackageIcon
} from '@primer/octicons-react'

const UnderlineNav = ({
  htmlUrl = 'https://github.com/tailwindlabs?tab=repositories',
  repos = 190,
  packages = 3
}) => {
  return (
    <div
      className="sticky block px-4 -mx-4 overflow-hidden overflow-x-auto leading-[21px] text-left border-b border-accent-br z-[3]"
      style={{ scrollbarWidth: 'none' }}>
      <nav className="flex text-sm break-words">
        <ul className="relative flex no-underline list-none select-none whitespace-nowrap">
          <a
            href={`${htmlUrl}`}
            className="px-4 py-2 border-b-2 border-transparent cursor-pointer focus:outline-none hover:text-gray-700">
            <BookIcon className="mr-2 text-secondary" />
            Overview
          </a>

          <a
            href="#"
            className="px-4 py-2 font-bold  border-b-2 cursor-pointer focus:outline-none hover:text-gray-700 border-[#f78166]">
            <RepoIcon className="mr-2 text-secondary" />
            Repositories
          </a>
          <a
            href={`${htmlUrl}?tab=projects`}
            className="px-4 py-2 border-b-2 border-transparent cursor-pointer focus:outline-none hover:text-gray-700">
            <ProjectIcon className="mr-2 text-secondary" />
            Projects
          </a>
          <a
            href={`${htmlUrl}?tab=packages`}
            className="px-4 py-2 border-b-2 border-transparent cursor-pointer focus:outline-none hover:text-gray-700">
            <PackageIcon className="mr-2 text-secondary" />
            Packages
          </a>
        </ul>
      </nav>
    </div>
  )
}

export default UnderlineNav
