import React, { ReactElement } from 'react'
import './App.css'
import { AppRouter } from './routes'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store'
import { ThemeProvider } from '@mui/private-theming'
import { theme } from './styles/theme'

function App (): ReactElement {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
