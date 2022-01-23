import { render } from '@testing-library/react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { RepositoriesTab } from '../../..'

describe('Render Repositories Nav', () => {
  window.scroll = jest.fn()

  it('should render Nav', () => {
    const { container } = render(
      <Router>
        <QueryParamProvider ReactRouterRoute={Route}>
          <RepositoriesTab />
        </QueryParamProvider>
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
