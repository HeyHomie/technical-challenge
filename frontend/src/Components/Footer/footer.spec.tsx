import { render } from '@testing-library/react'
import Footer from './Footer'

describe('Footer render', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
