import { FC } from 'react'

type Props = {
  src: string
}
const Avatar: FC<Props> = ({ src }) => {
  return (
    <a href={src}>
      <img
        src={src}
        className="rounded-full"
        alt="avatar"
        width="296"
        height="296"></img>
    </a>
  )
}

export default Avatar
