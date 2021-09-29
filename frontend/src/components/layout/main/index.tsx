import React, { PropsWithChildren } from 'react'
import Navbar from 'components/layout/navbar'
import Footer from 'components/layout/footer'

//Styles
import * as styles from './styles'

interface HeaderProps {
  children: any
}

const Main: React.FC<HeaderProps> = ({ children }) => {
  return (
    <main className={styles.BODY}>
      <Navbar />

      <div className={styles.CONTAINER}>{children}</div>
      <div className={styles.FOOTER_CONTAINER}>
        <footer className={styles.FOOTER}>
          <Footer />
        </footer>
      </div>
    </main>
  )
}

export default Main
