import React, { FC } from 'react'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { Main } from '../components/main/Main'

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
