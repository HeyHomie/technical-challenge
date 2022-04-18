import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  label: {
    display: 'inline-block',
    padding: '0 7px',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '18px',
    whiteSpace: 'nowrap',
    border: '1px solid transparent',
    borderRadius: '2em',
    borderColor: '#d0d7de'
  },
  labelLanguage: {
    position: 'relative',
    // top: '30%',
    marginTop: '2%',
    marginRight: '2%',
    display: 'inline-block',
    width: '12px',
    height: '12px',
    border: '1px solid #d0d7de',
    borderRadius: '50%'
  }
}))
