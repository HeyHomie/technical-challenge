import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  root: {
    fontSize: '1em',
    fontFamily: 'sans-serif',
    textTransform: 'capitalize',
    '&:hover': {
      textDecoration: 'underline solid #FD8C73 3px',
      textUnderlineOffset: '180%'
    }
  }
}))
