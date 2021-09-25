import styled from 'styled-components'
import { color, fontWeight } from '../../../styles/index'

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: min-content;
  color: ${color.grey5};

  > .name {
    margin: 0;
    padding-top: 16px;
  }

  > .user-name {
    padding-bottom: 16px;
    color: ${color.grey};
    font-size: 20px;
    font-weight: ${fontWeight.light};
  }
`

export const UserPhoto = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 50%;
`

export const Button = styled.a`
  width: 100%;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-bottom: 16px;
  font-size: 14px;
  color: ${color.grey5};
  background-color: ${color.grey3};
  border-radius: 6px;
`
