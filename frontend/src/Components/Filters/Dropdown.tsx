import * as React from 'react'

const Dropdown: React.FC = () => {
  return (
    <React.StrictMode>
      <select name='select' id='select' defaultValue='Filter'>
        <option value='type' selected>
          Type
        </option>
      </select>
    </React.StrictMode>
  )
}

export default Dropdown
