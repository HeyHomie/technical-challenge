import styled from 'styled-components'
import { color, fontWeight } from '../../../styles/index'

export const RepositoryCardContainer = styled.div`
  border-top: 2px solid ${color.grey3};
  color: ${color.grey};
  padding: 24px 0;
`

export const SectionOne = styled.div`
  color: ${color.blue};
  font-size: 20px;
  font-weight: ${fontWeight.semibold};
  margin-bottom: 4px;
  margin: 0;
`

export const SectionTwo = styled.div`
  margin-bottom: 8px;
`
export const SectionThree = styled.div`
  align-items: center;
  display: flex;
  font-size: 12px;
`

export const DescAndIcon = styled.div`
  align-items: center;
  display: flex;
  font-size: 12px;
  margin-right: 16px;

  > svg {
    margin-right: 3px;
  }

  > .color {
    align-self: center;
    content: '';
    background-color: red;
    border-radius: 50%;
    height: 12px;
    margin-right: 7px;
    width: 12px;
  }
`
