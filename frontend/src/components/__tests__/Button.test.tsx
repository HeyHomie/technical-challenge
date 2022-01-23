import { render } from '@testing-library/react'
import { Button } from '..'

describe('Render buttons', () => {
  it('should render green button', () => {
    const { container } = render(<Button type="green">Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render outline button', () => {
    const { container } = render(<Button type="outline">Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render disabled button', () => {
    const { container } = render(<Button disabled>Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render button with no border left', () => {
    const { container } = render(<Button noBorderLeft>Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render button with no border right', () => {
    const { container } = render(<Button noBorderRight>Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render button with no border left and no border right', () => {
    const { container } = render(
      <Button noBorderLeft noBorderRight>
        Button
      </Button>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
