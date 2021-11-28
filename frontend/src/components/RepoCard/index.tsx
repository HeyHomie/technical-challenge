import React, { FunctionComponent } from 'react'
import { UpdatedAtFormated } from '../updatedAtFormated'
import './styles.css'
interface Props {
  name: string
  private: boolean
  isPrivate: boolean
  description?: string
  topics: string[]
  language?: string
  fork: boolean
  forks: number
  license?: any
  updated_at: string
  updatedAt: string
  html_url: string
  htmlUrl: string
}

export const RepoCard: FunctionComponent<Props> = ({
  name,
  private: isPrivate,
  description,
  topics,
  language,
  license,
  updated_at: updatedAt,
  html_url: htmlUrl
}) => {
  let id: number = 0

  return (
    <div className='RepoCard--container'>
      <div className='RepoCard__header'>
        <a href={htmlUrl}>
          <h2>{name}</h2>
        </a>
        {!isPrivate && <p>Public</p>}
      </div>

      <div className='RepoCard__description'>
        {description != null && <p>{description}</p>}
        {topics.length > 0 &&
          topics.map((item) => (
            <span key={(id = id + 1)} className='RepoCard__description--topics'>
              {item}
            </span>
          ))}
      </div>

      <div className='RepoCard__info'>
        {language != null && <p>{language}</p>}
        {license != null && <p>{license.name}</p>}
        <UpdatedAtFormated timeDate={updatedAt} />
      </div>
    </div>
  )
}
