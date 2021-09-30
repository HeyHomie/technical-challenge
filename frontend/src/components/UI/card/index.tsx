import React from 'react'

// Styles
import * as styles from './styles'

const Card: React.FC<ICard> = ({ url, nameL, children }) => {
  return (
    <div className={styles.MAIN}>
      <div className="mb-8">{children}</div>
      <div className="text-center">
        <p className={styles.NAME}>{nameL}</p>
        <p className={styles.URL}>{url}</p>
      </div>
    </div>
  )
}

export default Card
