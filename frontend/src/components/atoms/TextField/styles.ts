import styled from 'styled-components'
import { color } from '../../../styles/'

export const TextFieldContainer = styled.input`
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid ${color.grey6};
  box-sizing: border-box;
  color: ${color.grey5};
  font-size: 14px;
  height: inherit;
  margin-right: 16px;
  padding: 5px 12px;
  width: 489px;

  &:focus {
    border: 1px solid ${color.blue};
    box-shadow: 0 0 0 3px ${color.blue1};
    outline: none;
  }
`
