import { Box } from '@mui/system'
import { Grid, Link, Typography } from '@mui/material'
import { useAppSelector } from '../../../store/store'
import { selectUser } from '../../../store/slice/api-user'
import { Item } from '../../atoms/item/index'
import { AvatarAndName } from '../../molecules/avatar-name'
import { ButtonGit } from '../../atoms/button/index'
import { IconsGit } from '../../atoms/svg-icons'
import { ContactUser } from '../../molecules/contact-user/contact'

export const AvatarInfo: any = () => {
  const { data } = useAppSelector(selectUser)
  const avatar = data.user.avatar_url

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={12}>
        <Item>
          <AvatarAndName
            avatar={{ avatar: avatar }}
            name={data.user.name}
            login={data.user.login}
          />
        </Item>
      </Grid>
      <Grid item xs={12} md={12}>
        <Item sx={{ margin: '0% 2%' }}>
          <ButtonGit
            text='follow'
            background='#F6F8FA'
            width='100%'
            border='2px solid #e0e0e0'
          />
        </Item>
      </Grid>
      <Grid item xs={12} md={12}>
        <Item sx={{ margin: '2%' }}>
          <Typography variant='body2'>{data.user.bio}</Typography>
        </Item>
      </Grid>
      <Grid item xs={12} md={12}>
        <Box display='flex' flexDirection='row' margin='2%'>
          <Item>
            {data.user.followers > 0 ? (
              <Box display='flex' flexDirection='row'>
                <Link
                  underline='none'
                  href='#'
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    color: '#57606A',
                    '&:hover': { color: 'blue' }
                  }}
                >
                  <IconsGit
                    paddingTop='0%'
                    paddingLeft='0%'
                    path='M 5.5 3.5 a 2 2 0 1 0 0 4 a 2 2 0 0 0 0 -4 Z M 2 5.5 a 3.5 3.5 0 1 1 5.898 2.549 a 5.507 5.507 0 0 1 3.034 4.084 a 0.75 0.75 0 1 1 -1.482 0.235 a 4.001 4.001 0 0 0 -7.9 0 a 0.75 0.75 0 0 1 -1.482 -0.236 A 5.507 5.507 0 0 1 3.102 8.05 A 3.49 3.49 0 0 1 2 5.5 Z M 11 4 a 0.75 0.75 0 1 0 0 1.5 a 1.5 1.5 0 0 1 0.666 2.844 a 0.75 0.75 0 0 0 -0.416 0.672 v 0.352 a 0.75 0.75 0 0 0 0.574 0.73 c 1.2 0.289 2.162 1.2 2.522 2.372 a 0.75 0.75 0 1 0 1.434 -0.44 a 5.01 5.01 0 0 0 -2.56 -3.012 A 3 3 0 0 0 11 4 Z'
                  />
                  <strong>{data.user.followers}</strong>
                  <span style={{ marginLeft: '3%' }}>followers</span>
                </Link>
                <Link
                  underline='none'
                  href='#'
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    color: '#57606A',
                    '&:hover': { color: 'blue' }
                  }}
                >
                  <span style={{ margin: '-8% 10% 0% 10%' }}> . </span>
                  <strong>{data.user.following}</strong>
                  <span style={{ marginLeft: '3%' }}>following</span>
                </Link>
              </Box>
            ) : (
              console.log('no hay seguidores')
            )}
          </Item>
        </Box>
      </Grid>
      <Grid item xs={12} md={12}>
        <Box display='flex' flexDirection='column' margin='2%'>
          <Item>
            {data.user.company !== null && (
              <ContactUser
                contact={data.user.company}
                icons={{
                  path: 'M 1.5 14.25 c 0 0.138 0.112 0.25 0.25 0.25 H 4 v -1.25 a 0.75 0.75 0 0 1 0.75 -0.75 h 2.5 a 0.75 0.75 0 0 1 0.75 0.75 v 1.25 h 2.25 a 0.25 0.25 0 0 0 0.25 -0.25 V 1.75 a 0.25 0.25 0 0 0 -0.25 -0.25 h -8.5 a 0.25 0.25 0 0 0 -0.25 0.25 v 12.5 Z M 1.75 16 A 1.75 1.75 0 0 1 0 14.25 V 1.75 C 0 0.784 0.784 0 1.75 0 h 8.5 C 11.216 0 12 0.784 12 1.75 v 12.5 c 0 0.085 -0.006 0.168 -0.018 0.25 h 2.268 a 0.25 0.25 0 0 0 0.25 -0.25 V 8.285 a 0.25 0.25 0 0 0 -0.111 -0.208 l -1.055 -0.703 a 0.75 0.75 0 1 1 0.832 -1.248 l 1.055 0.703 c 0.487 0.325 0.779 0.871 0.779 1.456 v 5.965 A 1.75 1.75 0 0 1 14.25 16 h -3.5 a 0.75 0.75 0 0 1 -0.197 -0.026 c -0.099 0.017 -0.2 0.026 -0.303 0.026 h -3 a 0.75 0.75 0 0 1 -0.75 -0.75 V 14 h -1 v 1.25 a 0.75 0.75 0 0 1 -0.75 0.75 h -3 Z M 3 3.75 A 0.75 0.75 0 0 1 3.75 3 h 0.5 a 0.75 0.75 0 0 1 0 1.5 h -0.5 A 0.75 0.75 0 0 1 3 3.75 Z M 3.75 6 a 0.75 0.75 0 0 0 0 1.5 h 0.5 a 0.75 0.75 0 0 0 0 -1.5 h -0.5 Z M 3 9.75 A 0.75 0.75 0 0 1 3.75 9 h 0.5 a 0.75 0.75 0 0 1 0 1.5 h -0.5 A 0.75 0.75 0 0 1 3 9.75 Z M 7.75 9 a 0.75 0.75 0 0 0 0 1.5 h 0.5 a 0.75 0.75 0 0 0 0 -1.5 h -0.5 Z M 7 6.75 A 0.75 0.75 0 0 1 7.75 6 h 0.5 a 0.75 0.75 0 0 1 0 1.5 h -0.5 A 0.75 0.75 0 0 1 7 6.75 Z M 7.75 3 a 0.75 0.75 0 0 0 0 1.5 h 0.5 a 0.75 0.75 0 0 0 0 -1.5 h -0.5 Z'
                }}
              />
            )}
          </Item>
          <Item>
            {data.user.location !== null && (
              <ContactUser
                contact={data.user.location}
                icons={{
                  path: 'M 11.536 3.464 a 5 5 0 0 1 0 7.072 L 8 14.07 l -3.536 -3.535 a 5 5 0 1 1 7.072 -7.072 v 0.001 Z m 1.06 8.132 a 6.5 6.5 0 1 0 -9.192 0 l 3.535 3.536 a 1.5 1.5 0 0 0 2.122 0 l 3.535 -3.536 Z M 8 9 a 2 2 0 1 0 0 -4 a 2 2 0 0 0 0 4 Z'
                }}
              />
            )}
          </Item>
          <Item>
            {data.user.blog !== null && (
              <ContactUser
                contact={data.user.blog}
                icons={{
                  path: 'M 7.775 3.275 a 0.75 0.75 0 0 0 1.06 1.06 l 1.25 -1.25 a 2 2 0 1 1 2.83 2.83 l -2.5 2.5 a 2 2 0 0 1 -2.83 0 a 0.75 0.75 0 0 0 -1.06 1.06 a 3.5 3.5 0 0 0 4.95 0 l 2.5 -2.5 a 3.5 3.5 0 0 0 -4.95 -4.95 l -1.25 1.25 Z m -4.69 9.64 a 2 2 0 0 1 0 -2.83 l 2.5 -2.5 a 2 2 0 0 1 2.83 0 a 0.75 0.75 0 0 0 1.06 -1.06 a 3.5 3.5 0 0 0 -4.95 0 l -2.5 2.5 a 3.5 3.5 0 0 0 4.95 4.95 l 1.25 -1.25 a 0.75 0.75 0 0 0 -1.06 -1.06 l -1.25 1.25 a 2 2 0 0 1 -2.83 0 Z'
                }}
              />
            )}
          </Item>
        </Box>
        <hr />
      </Grid>
    </Grid>
  )
}
