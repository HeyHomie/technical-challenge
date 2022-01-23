import { render } from '@testing-library/react'
import { Select } from '..'

describe('Render select', () => {
  it('should render select', () => {
    const { container } = render(
      <Select
        name="testSelect"
        options={[
          {
            label: 'Option 1',
            value: 'option-1'
          },
          {
            label: 'Option 2',
            value: 'option-2'
          }
        ]}
        defaultValue="option-1">
        My Select
      </Select>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
