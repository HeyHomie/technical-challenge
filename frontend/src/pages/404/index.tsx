import React from 'react'

// Styles
import * as styles from './styles'

const NotFound = () => {
  return (
    <div className={styles.CONTAINER}>
      <p className={styles.TEXTS}>404</p>
      <p className={styles.SUBTEXT}>
        The page you are looking for does not exist.
      </p>
    </div>
  )
}

export default NotFound
