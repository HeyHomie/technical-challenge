import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export interface PropsSelect {
  options?: string[]
  text?: string
  adornment?: any
}

export const SelectButton: any = ({
  options = [],
  text = '',
  adornment = ''
}: PropsSelect) => {
  const [optionRepo, setOptionRepo] = React.useState('')
  const handleChange: any = (event: SelectChangeEvent) => {
    setOptionRepo(event.target.value)
  }

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 70,
          backgroundColor: '#f6f8fa',
          borderRadius: '10px'
        }}
      >
        {/* <InputLabel id="demo-simple-select-helper-label"/> */}
        <Select
          value={optionRepo}
          displayEmpty
          startAdornment={adornment}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
              {
                padding: '.3rem 2rem'
              },
            '.css-1dlsquz-MuiSvgIcon-root': {
              padding: '0%'
            },
            '.css-bf1e45-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
              {
                padding: '.3rem .3rem'
              },
            borderRadius: '10px',
            minWidth: '5%',
            color: 'black',
            fontWeight: 500,
            fontSize: '.9em'
          }}
        >
          <MenuItem value=''>
            <em style={{ fontStyle: 'normal', fontSize: '.8rem' }}>{text}</em>
          </MenuItem>
          {options?.map((optionMenu) => {
            return (
              <div key={optionMenu}>
                <MenuItem sx={{ color: 'black' }} value={optionMenu}>
                  {optionMenu}
                </MenuItem>
                <hr />
              </div>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}
