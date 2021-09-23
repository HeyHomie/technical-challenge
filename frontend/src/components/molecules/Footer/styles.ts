import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 40px 0;
  border: 2px solid red;

  > ul {
    display: flex;
    padding: 0;
    justify-content: space-between;
    border: 1px solid;
    > li {
      list-style: none;
    }
  }
`
