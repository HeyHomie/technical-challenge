import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export interface PropsSelect {
  options?: string[]
  text?: string
}

export const SelectButton: any = ({ options = [], text = '' }: PropsSelect) => {
  const [optionRepo, setOptionRepo] = React.useState('')
  const handleChange: any = (event: SelectChangeEvent) => {
    setOptionRepo(event.target.value)
  }
  console.log(optionRepo)

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
        <Select
          value={optionRepo}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
              {
                padding: '10px 17px'
              },
            borderRadius: '10px'
          }}
        >
          <MenuItem value=''>
            <em>{text}</em>
          </MenuItem>
          {options?.map((optionMenu) => {
            return (
              <div key={optionMenu}>
                <MenuItem value={optionMenu}>{optionMenu}</MenuItem>
                <hr />
              </div>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}
