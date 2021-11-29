import { FC } from 'react'
import { IUser } from 'types'
import { Avatar } from 'components/ui'
import {
  LinkIcon,
  PeopleIcon,
  StarIcon,
  MailIcon,
  LocationIcon,
  OrganizationIcon
} from '@primer/octicons-react'
import { Link } from 'react-router-dom'

type Props = {
  user: IUser
}

const UserCard: FC<Props> = ({ user }) => {
  const Social: FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
      <Link to={{ search: '?tab=followers' }}>
        <PeopleIcon size={16} className="mr-2" />
        <span className="font-bold text-primary">{user.followers}</span>{' '}
        followers
      </Link>{' '}
      ·{' '}
      <Link to={{ search: '?tab=following' }}>
        <span className="font-bold text-primary">{user.following}</span>{' '}
        following{' '}
      </Link>
      ·{' '}
      <Link to={{ search: '?tab=stars' }}>
        <StarIcon size={16} />{' '}
        <span className="font-bold text-primary">38</span>
      </Link>
    </div>
  )

  return (
    <div className="w-full ">
      <div className="grid grid-cols-6 sm:grid-cols-1 ">
        <Avatar
          src={user.avatar_url}
          className="relative flex items-center h-auto col-span-1 py-4 mx-3 sm:mx-0 sm:py-0"
        />
        <div className="w-full col-start-2 col-end-6 py-4 sm:col-span-1">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <h3 className="text-lg text-secondary">{user.login}</h3>
        </div>
      </div>
      <button className="hidden text-sm btn sm:block">Follow</button>
      <p className="my-4">{user.bio}</p>
      <div className="text-sm">
        <Social className="hidden mb-3 text-secondary sm:block" />

        <p>
          <OrganizationIcon size={16} className="mr-2 text-secondary" />
          {user.company}
        </p>
        <p>
          <LocationIcon size={16} className="mr-2 text-secondary" />
          {user.location}
        </p>
        <p>
          <MailIcon size={16} className="mr-2 text-secondary" />
          mail@example.com
        </p>
        <p>
          <LinkIcon size={16} className="mr-2 text-secondary" />
          {user.blog}
        </p>
      </div>
      <Social className="block my-4 text-secondary sm:hidden" />
      <button className="text-sm btn sm:hidden">Follow</button>
    </div>
  )
}

export default UserCard
