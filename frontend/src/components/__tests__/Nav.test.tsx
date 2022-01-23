import { render } from '@testing-library/react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { Nav } from '..'

describe('Render Nav', () => {
  it('should render Nav', () => {
    const { container } = render(
      <Router>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Nav repositoriesCount={43} startsCount={53} />
        </QueryParamProvider>
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
