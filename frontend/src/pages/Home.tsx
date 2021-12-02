import { useState, FC, useEffect } from 'react'
import { apiFetch } from 'api'
import { useParams } from 'react-router-dom'
import filterRepos from 'lib/filterRepos'
import { UserCard, Spinner } from 'components/ui'
import { RepoList, SearchRepo } from 'components/repo'
import { IRepository } from 'types'
import classNames from 'lib/classNames'
import { UnderlineNav } from 'components/common'
import useSWR from 'swr'

const per_page = 30

const Home: FC = () => {
  const { username } = useParams<{ username: string }>()
  const [filteredRepos, setFilteredRepos] = useState<IRepository[]>([])
  const [page, setPage] = useState(1)
  const [type, setType] = useState('all')
  const [sort, setSort] = useState('updated')
  const [language, setLanguage] = useState('all')
  const [repoName, setRepoName] = useState('')

  const incrementPage = () => setPage((page) => page + 1)
  const decrementPage = () => setPage((page) => page - 1)
  const { data: user, error: userError } = useSWR(
    `/users/${username}`,
    apiFetch
  )

  const { data: repos, error: reposError } = useSWR(
    `/users/${username}/repos?q=${repoName}&per_page=${per_page}&page=${page}&sort=${sort}&type=${type}&language=${language}`,
    apiFetch
  )

  useEffect(() => {
    if (user) {
      document.title = `${user.login} (${user.name}) / Repositories`
    }
  }, [user])

  useEffect(() => {
    if (repos) {
      setFilteredRepos(filterRepos({ repos, language, name: repoName }))
    }
  }, [repos, language, repoName])

  const Repos = filteredRepos.length ? filteredRepos : repos

  return (
    <div className="flex flex-col min-h-full gap-8 md:mt-6 md:flex-row">
      <aside className="w-full md:max-w-[296px] md:mt-4">
        {!user ? <Spinner /> : <UserCard user={user} />}
      </aside>
      <div className="w-full">
        <UnderlineNav repos={repos?.public_repos} />
        <SearchRepo
          {...{
            type,
            setType,
            sort,
            setSort,
            language,
            setLanguage,
            setRepoName
          }}
        />
        {!repos ? (
          <Spinner />
        ) : (
          <>
            <RepoList repos={Repos} />
            <div className="flex items-center justify-center my-4 text-accent-fg ">
              <button
                className={classNames(
                  'btn',
                  'w-auto rounded-r-none border-r-0 '
                )}
                disabled={page === 1}
                onClick={decrementPage}>
                Previous
              </button>
              <button
                className={classNames('btn', 'w-auto rounded-l-none')}
                onClick={incrementPage}
                disabled={Repos.length < per_page}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Home
