import { createTheme, responsiveFontSizes } from '@mui/material'

export const theme = responsiveFontSizes(
  createTheme({
    spacing: 4,

    typography: {
      fontFamily: ['Roboto', 'Raleway', 'Open Sans'].join(','),
      h1: {
        fontSize: '5rem',
        ffontFamily: 'Poppins,sans-serif'
      },
      h3: {
        fontSize: '2rem',
        fontFamily: 'Poppins,sans-serif'
      },
      h4: {
        fontSize: '1.2rem',
        fontFamily: 'Poppins,sans-serif',
        fontWeight: 200
      },
      body1: {
        fontSize: '1rem',
        fontFamily: 'Poppins,sans-serif'
      }
    },
    palette: {
      background: {
        default: '#009900' // green
      },
      primary: {
        main: '#4e34e1', // purpure
        contrastText: '#212121'
      },
      secondary: {
        main: '#ffffff' // white
      },

      text: {
        primary: '#4e34e1', // purpure
        secondary: '#9e9e9e' // gray
      }
    }
  })
)
