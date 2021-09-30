import React from 'react'

// Styles
import * as styles from './styles'

const Card: React.FC<ICard> = ({ children, color }) => {
  return (
    <div
      className={`${styles.CARD} ${color ? 'shadow-none' : ''}`}
      style={{ backgroundColor: color }}>
      <div>{children}</div>
    </div>
  )
}

export default Card
