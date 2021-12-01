import { FC } from 'react'
import { IRepository } from 'types'
import RepoCard from './RepoCard'

type RepoCardProps = {
  repos: IRepository[]
}

const RepoList: FC<RepoCardProps> = ({ repos }) => {
  return (
    <div className="text-sm">
      <ul>
        <li className="divide-y divide-accent-br">
          {repos.map((repo) => (
            <RepoCard repo={repo} />
          ))}
        </li>
      </ul>
    </div>
  )
}

export default RepoList
