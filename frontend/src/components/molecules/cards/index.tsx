import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import { useStyles } from './style'
import { Item } from '../../atoms/item/index'
import { IconsGit } from '../../atoms/svg-icons/index'
import { SelectButton } from '../button-select'
import { optionStar, ColorLabelanguage } from './utiliti'

export interface PropsCardRepo {
  name?: string
  description?: string
  langage?: string
  visibility?: string
  update?: string
  licence?: string
}

export const CardInfoRepositor: any = ({
  name = '',
  description = '',
  langage = '',
  visibility = '',
  update = '',
  licence = ''
}: PropsCardRepo) => {
  const date = update.split('T')
  const colorlanguage = ColorLabelanguage(langage)

  const classes = useStyles()
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
        <Box display='flex' flexDirection='row'>
          <Typography component='div' variant='h6' sx={{ color: '#0969da' }}>
            {name}
            <Typography
              variant='body3'
              color='text.secondary'
              component='div'
              className={classes.label}
            >
              {visibility}
            </Typography>
          </Typography>
        </Box>
        <Typography
          variant='body2'
          color='text.secondary'
          component='div'
          sx={{ marginTop: '2%' }}
        >
          {description}
        </Typography>
        <Box display='flex' flexDirection='row'>
          <Typography
            className={classes.labelLanguage}
            sx={{ backgroundColor: colorlanguage }}
          />
          <Typography
            variant='body3'
            color='text.secondary'
            component='div'
            sx={{ margin: '2% 2% 2% 0%' }}
          >
            {langage}
          </Typography>

          {licence !== '' && (
            <>
              <Item sx={{ margin: '1% 0% 2% 0%' }}>
                <IconsGit
                  paddingTop='20%'
                  paddingLeft='15%'
                  width='80%'
                  path='M 8.75 0.75 a 0.75 0.75 0 0 0 -1.5 0 V 2 h -0.984 c -0.305 0 -0.604 0.08 -0.869 0.23 l -1.288 0.737 A 0.25 0.25 0 0 1 3.984 3 H 1.75 a 0.75 0.75 0 0 0 0 1.5 h 0.428 L 0.066 9.192 a 0.75 0.75 0 0 0 0.154 0.838 l 0.53 -0.53 l -0.53 0.53 v 0.001 l 0.002 0.002 l 0.002 0.002 l 0.006 0.006 l 0.016 0.015 l 0.045 0.04 a 3.514 3.514 0 0 0 0.686 0.45 A 4.492 4.492 0 0 0 3 11 c 0.88 0 1.556 -0.22 2.023 -0.454 a 3.515 3.515 0 0 0 0.686 -0.45 l 0.045 -0.04 l 0.016 -0.015 l 0.006 -0.006 l 0.002 -0.002 l 0.001 -0.002 L 5.25 9.5 l 0.53 0.53 a 0.75 0.75 0 0 0 0.154 -0.838 L 3.822 4.5 h 0.162 c 0.305 0 0.604 -0.08 0.869 -0.23 l 1.289 -0.737 a 0.25 0.25 0 0 1 0.124 -0.033 h 0.984 V 13 h -2.5 a 0.75 0.75 0 0 0 0 1.5 h 6.5 a 0.75 0.75 0 0 0 0 -1.5 h -2.5 V 3.5 h 0.984 a 0.25 0.25 0 0 1 0.124 0.033 l 1.29 0.736 c 0.264 0.152 0.563 0.231 0.868 0.231 h 0.162 l -2.112 4.692 a 0.75 0.75 0 0 0 0.154 0.838 l 0.53 -0.53 l -0.53 0.53 v 0.001 l 0.002 0.002 l 0.002 0.002 l 0.006 0.006 l 0.016 0.015 l 0.045 0.04 a 3.517 3.517 0 0 0 0.686 0.45 A 4.492 4.492 0 0 0 13 11 c 0.88 0 1.556 -0.22 2.023 -0.454 a 3.512 3.512 0 0 0 0.686 -0.45 l 0.045 -0.04 l 0.01 -0.01 l 0.006 -0.005 l 0.006 -0.006 l 0.002 -0.002 l 0.001 -0.002 l -0.529 -0.531 l 0.53 0.53 a 0.75 0.75 0 0 0 0.154 -0.838 L 13.823 4.5 h 0.427 a 0.75 0.75 0 0 0 0 -1.5 h -2.234 a 0.25 0.25 0 0 1 -0.124 -0.033 l -1.29 -0.736 A 1.75 1.75 0 0 0 9.735 2 H 8.75 V 0.75 Z M 1.695 9.227 c 0.285 0.135 0.718 0.273 1.305 0.273 s 1.02 -0.138 1.305 -0.273 L 3 6.327 l -1.305 2.9 Z m 10 0 c 0.285 0.135 0.718 0.273 1.305 0.273 s 1.02 -0.138 1.305 -0.273 L 13 6.327 l -1.305 2.9 Z'
                />
              </Item>
              <Typography
                variant='body3'
                color='text.secondary'
                component='div'
                sx={{ margin: '2% 2% 2% 0%' }}
              >
                {licence}
              </Typography>
            </>
          )}
          <Typography
            variant='body3'
            color='text.secondary'
            component='div'
            sx={{ margin: '2% 2% 2% 0%' }}
          >
            Update <span>{date[0]}</span>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '30%'
        }}
      >
        <Box display='flex' justifyContent='end'>
          <SelectButton
            adornment={
              <IconsGit path='M 8 0.25 a 0.75 0.75 0 0 1 0.673 0.418 l 1.882 3.815 l 4.21 0.612 a 0.75 0.75 0 0 1 0.416 1.279 l -3.046 2.97 l 0.719 4.192 a 0.75 0.75 0 0 1 -1.088 0.791 L 8 12.347 l -3.766 1.98 a 0.75 0.75 0 0 1 -1.088 -0.79 l 0.72 -4.194 L 0.818 6.374 a 0.75 0.75 0 0 1 0.416 -1.28 l 4.21 -0.611 L 7.327 0.668 A 0.75 0.75 0 0 1 8 0.25 Z m 0 2.445 L 6.615 5.5 a 0.75 0.75 0 0 1 -0.564 0.41 l -3.097 0.45 l 2.24 2.184 a 0.75 0.75 0 0 1 0.216 0.664 l -0.528 3.084 l 2.769 -1.456 a 0.75 0.75 0 0 1 0.698 0 l 2.77 1.456 l -0.53 -3.084 a 0.75 0.75 0 0 1 0.216 -0.664 l 2.24 -2.183 l -3.096 -0.45 a 0.75 0.75 0 0 1 -0.564 -0.41 L 8 2.694 v 0.001 Z' />
            }
            text='Star'
            options={optionStar}
          />
        </Box>
      </Box>
    </Box>
  )
}
