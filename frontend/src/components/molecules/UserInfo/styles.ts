import styled from 'styled-components'
import { color, fontWeight } from '../../../styles/index'

export const UserInfoContainer = styled.div`
  align-items: flex-start;
  color: ${color.grey5};
  display: flex;
  flex-direction: column;
  height: min-content;
  justify-content: center;
  width: 100%;

  > .name {
    margin: 0;
    padding-top: 16px;
  }

  > .user-name {
    color: ${color.grey};
    font-size: 20px;
    font-weight: ${fontWeight.light};
    padding-bottom: 16px;
  }
`

export const UserPhoto = styled.img`
  border-radius: 50%;
  height: 270px;
  width: 270px;
`

export const Button = styled.a`
  align-items: center;
  background-color: ${color.grey3};
  border-radius: 6px;
  color: ${color.grey5};
  display: flex;
  font-size: 14px;
  height: 30px;
  justify-content: center;
  margin-bottom: 16px;
  text-decoration: none;
  width: 100%;
`

export const SectionOne = styled.div`
  align-items: center;
  color: ${color.grey2};
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: ${fontWeight.semibold};
  justify-content: flex-start;
  margin: 16px 0;
  width: 100%;

  > * {
    &:hover {
      color: ${color.blue};
      cursor: pointer;
      span {
        color: ${color.blue};
      }
    }
  }

  span {
    color: ${color.grey5};
    margin-right: 4px;
  }
`
export const IconDescription = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  justify-content: flex-start;
  padding: 4px;

  > svg {
    margin-right: 6px;
  }

  > a {
    &:hover {
      color: ${color.blue};
      text-decoration: underline;
    }
  }
`

export const SectionTwo = styled.div`
  border-bottom: 1px solid ${color.grey3};
  padding-bottom: 16px;
  width: 100%;
`
