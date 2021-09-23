import styled from 'styled-components'
import { color } from '../../../styles/color'

export const FooterContainer = styled.footer`
  padding: 40px 0;
  border-top: 1px solid ${color.grey3};

  > ul {
    margin: 0;
    display: flex;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    > li {
      list-style: none;
      font-size: 12px;

      &.copyright {
        color: ${color.grey};
      }

      > a {
        display: block;
        color: ${color.blue};
        cursor: pointer;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }

        &.logo {
          margin: 0 24px;
          color: ${color.grey1};

          &:hover {
            color: ${color.grey2};
          }
        }
      }
    }
  }
`
