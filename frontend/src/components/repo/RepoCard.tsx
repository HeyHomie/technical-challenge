import { FC } from 'react'
import { IRepository, Language } from 'types'
import { Tag } from 'components/ui'
import { LawIcon, StarIcon } from '@primer/octicons-react'

const colors = {
  [Language.TypeScript]: '#2b7489',
  [Language.JavaScript]: '#f1e05a',
  [Language.HTML]: '#e34c26',
  [Language.CSS]: '#563d7c',
  [Language.Elixir]: '#6e4a7e',
  [Language.Java]: '#b07219',
  [Language.Python]: '#3572A5',
  [Language.Ruby]: '#701516',
  [Language.Go]: '#00ADD9',
  [Language.Rust]: '#dea584',
  [Language.Swift]: '#ffac45',
  [Language.Kotlin]: '#f18e33',
  [Language.C]: '#555555',
  [Language['C#']]: '#178600',
  [Language['C++']]: '#f34b7d',
  [Language.TeX]: '#3D6117',
  [Language.Shell]: '#89e051',
  [Language['Objective-C']]: '#438eff'
}

type RepoCardProps = {
  repo: IRepository
}
const RepoCard: FC<RepoCardProps> = ({ repo }) => {
  const diffDates = (date1: string, date2: string | number) => {
    const date1_ms = new Date(date1).getTime()
    const date2_ms = new Date(date2).getTime()
    const diff_ms = date2_ms - date1_ms

    return diff_ms
  }

  const convertDate = (date: string) => {
    const seconds = Math.floor(diffDates(date, Date.now()) / 1000)
    const hours = Math.floor(seconds / 60 / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(months / 12)

    const days_text = days > 1 ? 'days' : 'day'
    const hours_text = hours > 1 ? 'hours' : 'hour'
    const months_text = months > 1 ? 'months' : 'month'
    const years_text = years > 1 ? 'years' : 'year'

    const time_text =
      years > 0
        ? `${years} ${years_text} ago`
        : months > 0
        ? `${months} ${months_text} ago`
        : days > 0
        ? `${days} ${days_text} ago`
        : hours > 0
        ? `${hours} ${hours_text} ago`
        : 'less than a minute'

    return time_text
  }

  const updatedAt = convertDate(repo.updated_at)

  return (
    <div className="grid grid-cols-6 py-6">
      <div className="grid col-span-5 gap-2 ">
        <h3>
          <a
            href={repo.html_url}
            className="mr-2 text-xl font-bold text-accent-fg">
            {repo.name}
          </a>
          <Tag className="text-secondary">
            {repo.private ? 'Private' : 'Public'}
          </Tag>
        </h3>
        <p className="text-secondary">{repo.description}</p>
        <div className="flex gap-4 ">
          {repo.topics.map((topic) => (
            <Tag className="bg-accent-subtle hover:bg-accent-emphasis text-accent-fg">
              {topic}
            </Tag>
          ))}
        </div>
        <div className="inline-flex gap-4 text-secondary">
          {repo.language ? (
            <p>
              <span
                className="inline-block w-3 h-3 mr-1 rounded-full"
                style={{ backgroundColor: colors[repo.language] }}></span>
              {repo.language}
            </p>
          ) : null}
          {repo.license ? (
            <p>
              {repo.license?.key === 'mit' ? <LawIcon className="mr-1" /> : ''}
              {repo.license?.name}
            </p>
          ) : null}
          <p>Updated {updatedAt}</p>
        </div>
      </div>
      <div className="col-span-1">
        <button className="w-auto btn">
          <StarIcon className="text-secondary" /> Star
        </button>
      </div>
    </div>
  )
}

export default RepoCard
