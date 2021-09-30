import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '../components/layout/footer'

test('Renders correctly', () => {
  const component = renderer.create(<Footer />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  expect(tree).toBeTruthy()
})
