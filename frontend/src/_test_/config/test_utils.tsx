import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { rootReducer, persistor } from '../../store/store'

function render (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState
    }),
    ...renderOptions
  } = {}
): any {
  function Wrapper ({ children }): any {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export { render }
