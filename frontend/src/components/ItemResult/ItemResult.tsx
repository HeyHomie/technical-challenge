import React from 'react'
import './ItemResult.css'
import moment from 'moment'

interface Props {
  full_name: string,
  language: string,
  description: string,
  private: boolean,
  updated_at: string,
  html_url: string,
}
export const ItemResult = ({
  full_name,
  language,
  description,
  private: ispublic,
  updated_at,
  html_url
}: Props) => {
  return (
    <li className="item-result">
      <h3>
        <a href={html_url} className="reponame">
          {full_name}
        </a>
        <span className="label">{!ispublic ? 'Public' : ''}</span>
      </h3>
      <p className="repodesc">{description}</p>
      <div className="language">
        {language && <span className="repo-language-color"></span>}
        {language && <span className="language">{language}</span>}
        <span>Updated {moment(updated_at).fromNow()}</span>
      </div>
    </li>
  )
}
