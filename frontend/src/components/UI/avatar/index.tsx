import React from 'react'

//styles
import * as styles from './styles'

const Avatar: React.FC<IAvatar> = ({ image }) => {
  return <img className={styles.IMAGE} src={image} alt="photo" />
}

export default Avatar
