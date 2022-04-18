// import { fireEvent, screen } from '../setupTests'
import { fireEvent, screen } from '@testing-library/react'
import { ButtonGit } from '../components/atoms/button/index'
import { render } from './config/test_utils'

describe('Button', () => {
  const textBttn = 'Follow'
  const fnevent = jest.fn()

  it('Render element button', () => {
    render(<ButtonGit event={fnevent} text={textBttn} />)
    fireEvent.click(screen.getByText(textBttn))
    expect(fnevent).toHaveBeenCalledTimes(1)
  })
})
