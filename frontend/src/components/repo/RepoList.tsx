import { FC } from 'react'
import { IRepository } from 'types'
import RepoCard from './RepoCard'
type RepoCardProps = {
  repos: IRepository[]
}
const RepoList: FC<RepoCardProps> = ({ repos }) => {
  return (
    <ul className="divide-y">
      <li>
        {repos.map((repo) => (
          <RepoCard repo={repo} />
        ))}
      </li>
    </ul>
  )
}

export default RepoList
