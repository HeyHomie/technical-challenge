import { render } from '@testing-library/react'
import { RepositoryItemSkeleton } from '../../..'

describe('Render RepositoryItemSkeleton', () => {
  it('should render RepositoryItem', () => {
    const { container } = render(<RepositoryItemSkeleton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
