import { render } from '@testing-library/react'
import Filters from './Filters'

describe('Filters render', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Filters />)
    expect(asFragment()).toMatchSnapshot()
  })
})
