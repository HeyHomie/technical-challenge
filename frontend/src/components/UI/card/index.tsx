import React from 'react'

// Styles
import * as styles from './styles'

const Card: React.FC<ICard> = ({ children }) => {
  return (
    <div className={styles.MAIN}>
      <div className="mb-8">{children}</div>
    </div>
  )
}

export default Card
