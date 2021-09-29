import React from 'react'

//Styles
import * as styles from './styles'

//! This component could be refactored into smaller components or at least use a map function for the links

const Footer = () => {
  return (
    <div className="mt-12">
      <div className={styles.MAIN}>
        <div className={styles.LIST_CONTAINER}>
          <div className={styles.LIST_LINKS}>
            <p>About us</p>
          </div>
          <div className="pb-2 ">
            <p>Link</p>
          </div>
          <div className="pb-2 ">
            <p>Link</p>
          </div>
          <div className="pb-2 ">
            <p>Link</p>
          </div>
          <div className="pb-2 ">
            <p>Link</p>
          </div>
        </div>
        <div className={styles.LIST_CONTAINER}>
          <div className={styles.LIST_LINKS}>
            <p>Jobs</p>
          </div>
          <div className="pb-2 ">
            <p>Link</p>
          </div>
          <div className="pb-2 ">
            <p>Link</p>
          </div>
          <div className="pb-2 ">
            <p>Link</p>
          </div>
          <div className="pb-2 ">
            <p>Link</p>
          </div>
        </div>
      </div>
      <div className={styles.COPYRIGHT}>
        <p>2021 Homie Todos los derechos reservados</p>
      </div>
    </div>
  )
}

export default Footer
