import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import renderer from 'react-test-renderer'

import Navbar from '../components/layout/navbar'

const history = createMemoryHistory()

test('Renders correctly', () => {
  const component = renderer.create(
    <Router history={history}>
      <Navbar />
    </Router>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  expect(tree).toBeTruthy()
})
