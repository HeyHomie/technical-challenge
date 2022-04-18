import { render, fireEvent, screen } from '../setupTests'

import { ButtonGit } from '../components/atoms/button/index'

describe('Button', () => {
  const textBttn = 'Follow'
  const fnevent = jest.fn()

  it('Render element button', () => {
    render(<ButtonGit event={fnevent} text={textBttn} />)
    fireEvent.click(screen.getByText(textBttn))
    expect(fnevent).toHaveBeenCalledTimes(1)
  })
})
