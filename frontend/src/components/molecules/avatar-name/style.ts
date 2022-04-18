import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row'
    },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'row'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  name: {
    [theme.breakpoints.down('md')]: {
      margin: '10%'
    }
  }
}))
