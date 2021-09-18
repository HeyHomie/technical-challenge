import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineStar } from 'react-icons/ai'
import { IRepositories } from '../../interfaces/repositories.interface'
import './repo-card.css'

const RepoCard: React.FC<{ repo: IRepositories }> = ({ repo }) => {
  return (
    <article className="repo">
      <div className="content">
        <div className="headline">
          <div className="title">
            <CardHeadline
              name={repo.name}
              isPrivate={repo.private}
              url={repo.html_url}
            />
          </div>
          <p className="repo-description">{repo.description}</p>
        </div>
        <div className="details">
          <div className="language">
            {repo.language && (
              <GoPrimitiveDot size={18} className={`is-${repo.language}`} />
            )}
            <span>{repo.language}</span>
          </div>
        </div>
      </div>
      <button className="btn is-grey">
        <AiOutlineStar size={16} />
        <span>star</span>
      </button>
    </article>
  )
}

const CardHeadline: React.FC<any> = ({ name, isPrivate, url }) => {
  return (
    <>
      <h3>
        <a href={url} target="_blank">
          {name}
        </a>
      </h3>
      <small>{isPrivate ? 'private' : 'public'}</small>
    </>
  )
}

export default RepoCard
