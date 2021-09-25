import styled from 'styled-components'

export const Profile = styled.div`
  display: grid;
  column-gap: 16px;
  grid-template-columns: 280px auto;
  > .UserInfo {
    > img {
      border-radius: 50%;
      border: 2px solid black;
      height: 200px;
      object-fit: cover;
      width: 200px;
    }
  }
`
