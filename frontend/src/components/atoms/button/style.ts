import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  root: {
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    textTransform: 'capitalize',
    zIndex: '1',
    '&:hover': {
      textDecoration: 'underline solid #FD8C73 3px',
      textUnderlineOffset: '180%'
    }
  }
}))
