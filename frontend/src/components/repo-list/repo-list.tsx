import React from 'react'
import { IRepositories } from '../../interfaces/repositories.interface'
import RepoCard from '../repo-card/repo-card'

const RepoList: React.FC<{ repositories: IRepositories[] }> = ({
  repositories
}) => {
  return (
    <section className="list">
      {repositories.map((repo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </section>
  )
}

export default RepoList
