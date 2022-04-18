import { AvatarUser, PropsAvatar } from '../../atoms/avatar'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { useStyles } from './style'

export interface PropsAvatarName {
  avatar?: PropsAvatar
  name?: string
  login?: string
}

export const AvatarAndName: any = ({
  avatar,
  name,
  login
}: PropsAvatarName) => {
  const classes = useStyles()
  return (
    <Box className={classes.root} margin='5%'>
      <AvatarUser avatar={avatar?.avatar} width='100%' height='100%' />
      <Box className={classes.name}>
        <Typography variant='h3' sx={{ marginTop: '5%' }}>
          {name}
        </Typography>
        <Typography variant='body1'>{login}</Typography>
      </Box>
    </Box>
  )
}
