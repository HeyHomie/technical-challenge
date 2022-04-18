import { render, fireEvent } from '../setupTests'
import { InputFilter } from '../components/atoms/input/index'

describe('Input', () => {
  it('value input', () => {
    const container = render(<InputFilter />)

    const input = container.getByRole('textbox') as HTMLInputElement

    fireEvent.change(input, { target: { value: '45' } })

    expect(input.value).toBe('45')
  })
})
