import { render } from '@testing-library/react'
import { Layout } from '..'

describe('Render layout', () => {
  it('should render layout', () => {
    const { container } = render(
      <Layout>
        <div>Im a children</div>
      </Layout>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
