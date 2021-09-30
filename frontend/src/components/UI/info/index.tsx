import React from 'react'

//styles
import * as styles from './styles'

const Info: React.FC<IInfo> = ({ title, description, link, fullname }) => {
  return (
    <>
      <div>
        <p className={styles.MAIN}>{title}</p>
        <p className={styles.SUBTEXT}>{fullname}</p>
        <p className={styles.SECONDARY}>{description}</p>
        <div className="text-right">
          <a href={link}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Visit Repository
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Info
