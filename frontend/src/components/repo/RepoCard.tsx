import { FC } from 'react'
import { IRepository } from 'types'
import { Tag } from 'components/ui'

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
    <div className="my-6">
      <a href={repo.html_url} className="text-accent-fg">
        {repo.name}
      </a>
      <Tag>{repo.private ? 'Private' : 'Public'}</Tag>
      <p>{repo.description}</p>
      <p>{repo.language}</p>
      <p>{repo.license?.name}</p>
      <p>Updated {updatedAt}</p>
    </div>
  )
}

export default RepoCard
