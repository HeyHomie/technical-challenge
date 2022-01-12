import * as React from 'react'
import Dropdown from './Dropdown'
import Input from './Input'

const Filters: React.FC = () => {
  return (
    <React.StrictMode>
      <div className='filters-container'>
        <div className='filters-container__input'>
          <Input />
        </div>
        <div className='filters-container__dropdown'>
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>
        <div className='filters-container__button'>
          <button>New</button>
        </div>
      </div>
    </React.StrictMode>
  )
}

export default Filters
