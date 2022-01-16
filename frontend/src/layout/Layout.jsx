import React from 'react'
import { useGetData } from '../hooks/useGetData'

export const Layout = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}
