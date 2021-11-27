import React from 'react'
import { render } from '@testing-library/react'
import { Footer } from '../../components/Layout/Footer'
import { create } from 'react-test-renderer'

describe('Footer Component', () => {
  const footer = render(<Footer />)
  test('Render of the component Footer', () => {
    expect(footer).toBeInTheDocument
  })
})

describe('Footer Snapshot', () => {
  test('Comprobate UI from the component Footer', () => {
    const footer = create(
      <Footer />
    )
    expect(footer.toJSON()).toMatchSnapshot()
  })
})
