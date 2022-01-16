import { render } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar render', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Navbar />)
    expect(asFragment()).toMatchSnapshot()
  })
})
