import moment from 'moment'
import { Language, Repository } from '../../../interfaces'

import { Button } from '../..'

const languageColors = {
  javascript: '#f1e05a',
  typescript: '#2b7489',
  html: '#e34c26',
  python: '#3572A5',
  css: '#563d7c',
  vue: '#41b883',
  ruby: '#701516'
}

export function RepositoryItem({ repository }: { repository: Repository }) {
  const language = repository.language || ''
  const languageBgColor = languageColors[language.toLowerCase() as Language]

  return (
    <div className="py-6 border-b border-[#d8dee4] dark:border-[#373e47] grid grid-cols-12">
      <div className="col-span-9">
        <h3 className="mb-1 text-xl break-all text-[#0969da] dark:text-[#539bf5] font-semibold">
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
                  fillRule="evenodd"
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
      <div className="col-span-3 text-right">
        <div className="inline-flex">
          <Button noBorderRight>
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="mr-2 icon fill-[#6e7781]">
              <path
                fillRule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
            </svg>
            Star
          </Button>
          <Button noBorderLeft>
            <span className='inline-block align-middle content-[""] border-4 border-b-0 border-r-transparent border-b-transparent border-l-transparent opacity-80'></span>
          </Button>
        </div>
      </div>
    </div>
  )
}
