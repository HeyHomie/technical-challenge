import React from 'react'
import TextField from '@mui/material/TextField'

export interface PropsInput {
  type?: string
  label?: string
  placeholder?: string
  required?: boolean
  event?: (e: any) => void
  autoComplete?: 'off' | 'on'
  width?: string
  value?: any
  name?: string | undefined
  id?: string
}

export const InputFilter: any = ({
  type = 'text',
  label,
  placeholder = '',
  event,
  autoComplete = 'off',
  width = '100%',
  required = true,
  name,
  id
}: PropsInput) => {
  return (
    <TextField
      id={id}
      InputProps={{
        inputProps: {
          'data-testid': 'content-input'
        }
      }}
      required={required}
      name={name}
      type={type}
      label={label}
      placeholder={placeholder}
      onChange={event}
      autoComplete={autoComplete}
      sx={{
        borderRadius: '30px',
        width: { width },
        input: {
          color: 'black',
          padding: '3%',
          borderRadius: '30px',
          fontSize: '.9rem'
        },
        '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
          borderRadius: '10px'
        }
      }}
    />
  )
}
