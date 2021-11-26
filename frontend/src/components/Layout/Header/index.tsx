import React from 'react'
import './styles.css'

export const Header = (): JSX.Element => {
  return (
    <div className='Header--container'>
      <h2 className='Header__title'>GitHub</h2>
      <img
        className='Header__logo'
        src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
        alt='Github logo'
      />
    </div>
  )
}
