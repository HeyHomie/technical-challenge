import { Avatar } from '@mui/material'
export interface PropsAvatar {
  avatar?: string
  width?: string
  height?: string
}

export const AvatarUser: any = ({
  avatar = '',
  width = '',
  height = ''
}: PropsAvatar) => {
  return (
    <Avatar
      alt='Avatar user'
      src={avatar}
      sx={{
        width: { width },
        height: { height },
        border: '2px solid #e0e0e0',
        zIndex: '3'
      }}
    />
  )
}
