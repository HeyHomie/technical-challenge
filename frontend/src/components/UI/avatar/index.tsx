import React from 'react'

//styles
import * as styles from './styles'

const Avatar: React.FC<IAvatar> = ({ url, nameL, image }) => {
  return (
    <div className={styles.CONTAINER}>
      <img className={styles.IMAGE} src={image} alt="photo" />
      <div className="text-center">
        <p className={styles.NAME}>{nameL}</p>
        <p className={styles.URL}>{url}</p>
      </div>
    </div>
  )
}

export default Avatar
