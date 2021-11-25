import React, { FunctionComponent } from 'react'

interface Props {
  name: string
  private: boolean
  isPrivate: boolean
  description: string
  topics: string[]
  language?: string
  fork: boolean
  forks: number
  license: any
  updated_at: string
  updatedAt: string
}

export const RepoCard: FunctionComponent<Props> = ({
  name,
  private: isPrivate,
  description,
  topics,
  language,
  fork,
  forks,
  license,
  updated_at: updatedAt
}) => {
  let id: number = 0

  return (
    <div className='RepoCard--container'>
      <div className='Repocard__header'>
        <h2>{name}</h2>
        {!isPrivate && <span>Public</span>}
      </div>

      <div className='Repocard__description'>
        <p>{description}</p>
        {topics.length > 0 &&
          topics.map((item) => (
            <span key={(id = id + 1)} className='Repocard__description--topics'>
              {item}
            </span>
          ))}
      </div>

      <div className='info'>
        <p>{language}</p>
        {fork && <a href=''>{forks}</a>}
        {license != null && <p>{license.name}</p>}
        <p>{updatedAt}</p>
      </div>
    </div>
  )
}
