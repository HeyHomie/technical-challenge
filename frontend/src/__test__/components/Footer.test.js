import React from 'react'
import { render  } from '@testing-library/react'
import { Footer } from '../../components/Layout/Footer'
import { create } from 'react-test-renderer'

describe('Footer', () => {
  const footer = render(<Footer />)
  test('Render of the component Footer', () => {
    expect(footer.length).toEqual(1);
  })
});