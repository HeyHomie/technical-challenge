import { createTheme, responsiveFontSizes } from '@mui/material'

export const theme = responsiveFontSizes(
  createTheme({
    spacing: 4,

    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      h1: {
        fontSize: '5rem'
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 600
      },
      body1: {
        fontSize: '1.2rem',
        color: '#9e9e9e' // gray
      },
      body2: {
        fontSize: '1rem',
        color: '#24292F' // BLACK
      },
      body3: {
        fontSize: '.8rem',
        color: '#24292F' // BLACK
      }
    },
    palette: {
      background: {
        default: '#0969da' // green
      },
      primary: {
        main: '#0969da', // blue
        contrastText: '#212121'
      },
      secondary: {
        main: '#ffffff' // white
      },

      text: {
        primary: '#0969da', // blue
        secondary: '#9e9e9e' // gray
      }
    }
  })
)
