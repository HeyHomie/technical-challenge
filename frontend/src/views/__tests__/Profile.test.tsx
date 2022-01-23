import { render } from '@testing-library/react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ProfileView } from '..'

describe('Render Profile View', () => {
  it('should render Profile View', () => {
    const { container } = render(
      <Router>
        <QueryParamProvider ReactRouterRoute={Route}>
          <ProfileView />
        </QueryParamProvider>
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
