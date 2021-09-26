import styled from 'styled-components'
import { color, fontWeight } from '../../../styles'

export const FiltersContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 32px;
  justify-content: flex-start;
  margin: 16px 0;
  width: 100%;
`
export const Button = styled.button`
  align-items: center;
  background-color: ${color.grey6};
  border-radius: 6px;
  border: 1px solid rgba(400, 246, 252, 0.1);
  color: ${color.grey5};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: ${fontWeight.medium};
  margin-right: 3px;
  padding: 5px 16px;
  transition-property: color, background-color, border-color;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);

  &:hover {
    background-color: ${color.grey6};
    border-color: ${color.grey};
    transition-duration: 0.1s;
  }

  > svg {
    margin-left: 8px;
    opacity: 0.8;
  }
`

export const SuccessButton = styled(Button)`
  background-color: ${color.green};
  border-color: ${color.green};
  color: ${color.white};

  &:hover {
    background-color: ${color.green1};
    border-color: ${color.green1};
    transition-duration: 0.1s;
  }

  > svg {
    margin: 0 8px 0 0;
  }
`
