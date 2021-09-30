import React from 'react'

//styles
import * as styles from './styles'

const Avatar: React.FC<IAvatar> = ({ url, nameL, image, light = false }) => {
  return (
    <div className={styles.CONTAINER}>
      <img className={styles.IMAGE} src={image} alt="photo" />
      <div className="text-center">
        <p className={`${styles.NAME} ${light ? 'text-gray-700' : ''}`}>
          {nameL}
        </p>
        <p className={`${styles.URL} ${light ? 'text-gray-700' : ''}`}>{url}</p>
      </div>
    </div>
  )
}

export default Avatar
