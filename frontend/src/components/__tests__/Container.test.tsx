import { render } from '@testing-library/react'
import { Container } from '..'

describe('Render container', () => {
  it('should render container', () => {
    const { container } = render(
      <Container>
        <div>Im a children</div>
      </Container>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
