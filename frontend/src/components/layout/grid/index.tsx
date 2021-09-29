import React from 'react'

// Styles
import * as styles from './styles'

const Grid: React.FC<IProps> = ({ children }) => {
  return <div className={styles.MAIN_GRID}>{children}</div>
}

export default Grid
