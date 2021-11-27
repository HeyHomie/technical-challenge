import React from 'react'
import { render } from '@testing-library/react'
import { Header } from '../../components/Layout/Header'
import { create } from 'react-test-renderer'

describe('Header Component', () => {
  const header = render(<Header />)
  test('Render of the component Header', () => {
    expect(header).toBeInTheDocument
  })
})

describe('Footer Snapshot', () => {
  test('Comprobate UI from the component Header', () => {
    const header = create(
      <Header />
    )
    expect(header.toJSON()).toMatchSnapshot()
  })
})
