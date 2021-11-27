import React from 'react'

import './styles.css'

export const Miniloader = (): JSX.Element => {
  return (
    <div className='Miniloader--container'>
      <div className='lds-grid'>
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
