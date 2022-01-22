import moment from 'moment'
import { useParams } from 'react-router-dom'
import { useGithub } from '../../hooks'
import { Language, Repository } from './interface'
import { useQueryParam, NumberParam } from 'use-query-params'

interface Params {
  username: string
}

export function Repositories() {
  const [page] = useQueryParam('page')
  const [direction] = useQueryParam('direction')
  const { username } = useParams<Params>()

  const { data } = useGithub<Repository[]>(`users/${username}/repos`, {
    page: page || 1,
    direction: direction || 'asc',
    query: 'zus'
  })

  const languageColors = {
    javascript: '#f1e05a',
    typescript: '#2b7489',
    html: '#e34c26',
    python: '#3572A5',
    css: '#563d7c',
    vue: '#41b883',
    ruby: '#701516'
  }

  if (!data) return <></>

  return (
    <div>
      <div className="py-4 border-b border-[#373e47]">
        <div className="flex flex-auto">
          <div className="flex-auto mr-4">
            <input
              placeholder="Find a repository..."
              className="w-full py-[5px] px-[12px] text-sm placeholder:text-[#545d68] text-[#adbac7] align-middle bg-[#22272e] rounded-md border border-[#444c56] outline-none"
            />
          </div>
          <div className="flex">
            <div className="button mr-1">Type a</div>
            <div className="button mr-1">Language a</div>
            <div className="button">Sort a</div>
          </div>
          <div className="ml-4">
            <div className="button flex">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true">
                <path
                  fill-rule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
              </svg>
              New
            </div>
          </div>
        </div>
      </div>

      {data.map((repository) => {
        const language = repository.language || ''
        const languageBgColor =
          languageColors[language.toLowerCase() as Language]
        return (
          <div className="py-6 border-b border-[#373e47] grid grid-cols-12">
            <div className="col-span-9">
              <h3 className="mb-1 text-xl break-all text-[#539bf5] font-semibold">
                {repository.name}
                <span className="ml-1 inline-block px-[7px] text-xs font-medium border border-[#444c56] text-[#768390] rounded-full">
                  Public
                </span>
              </h3>
              {repository.fork && (
                <p className="mb-1 text-[#768390] text-xs">
                  Forked from {repository.homepage}
                </p>
              )}
              <p className="mb-2 text-[#768390]">{repository.description}</p>
              {repository.topics.length > 0 && (
                <div className="my-1 mb-2">
                  {repository.topics.map((topic) => (
                    <div className="inline-block text-xs px-[10px] font-medium rounded-full leading-5 text-[#539bf5] bg-[#4184e426]">
                      {topic}
                    </div>
                  ))}
                </div>
              )}
              <div className="text-[#768390] text-xs">
                {languageBgColor && (
                  <span className="mr-4">
                    <span
                      className="relative top-[1px] inline-block w-[12px] h-[12px] border border-[#cdd9e533] rounded-full"
                      style={{
                        backgroundColor: languageBgColor
                      }}></span>{' '}
                    {repository.language}
                  </span>
                )}
                {repository.stargazers_count > 0 && (
                  <span className="mr-4">
                    <svg
                      aria-label="star"
                      role="img"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="inline-block overflow-visible align-text-bottom  fill-[#768390]">
                      <path
                        fill-rule="evenodd"
                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                    </svg>{' '}
                    {repository.stargazers_count}
                  </span>
                )}
                <span className="mr-4">
                  Updated {moment(repository.pushed_at).fromNow()}
                </span>
              </div>
            </div>
            <div className="col-span-3 ">
              <div className="button">Star</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
