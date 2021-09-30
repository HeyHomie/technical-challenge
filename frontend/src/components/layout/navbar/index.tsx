import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import * as styles from './styles'

const Navbar = () => {
  return (
    <nav className={styles.CONTAINER_NAVBAR}>
      <div className={styles.GENERAL_CONTAINER}>
        <div className={styles.RIGHT_ITEMS}>
          <div className={styles.MENU_ITEM}>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
