import { render } from '@testing-library/react'
import Tabs from './Tabs'

describe('Tabs render', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Tabs />)
    expect(asFragment()).toMatchSnapshot()
  })
})
