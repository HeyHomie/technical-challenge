import styled from 'styled-components'
import { device } from './index'

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;

  @media ${device.extraLarge} {
    max-width: 1280px;
    border: 2px solid red;
    padding: 0 16px;
  }
`
