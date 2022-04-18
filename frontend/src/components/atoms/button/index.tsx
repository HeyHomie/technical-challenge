import * as React from 'react'
import Button from '@mui/material/Button'
import { useStyles } from './style'

export interface PropsButton {
  type?: 'button' | 'submit' | 'reset' | undefined
  size?: 'small' | 'large' | 'medium' | undefined
  text?: string
  disabled?: boolean
  event?: (e: any) => void
  background?: string
  color?: string
  width?: string
  padding?: string
  variant?: 'text' | 'contained' | 'outlined'
  icons?: any
  href?: string
  id: any
  key: any
  border: string
}

export const ButtonGit: any = ({
  type = 'button',
  text = '',
  size = 'large',
  disabled = false,
  event,
  background = 'linear-gradient(45deg, #ffffff 30%, #ffffff 90%)',
  color = '#24292f',
  width,
  variant = 'text',
  icons,
  href,
  id,
  key,
  border
}: PropsButton) => {
  const classes = useStyles()

  return (
    <Button
      id='bttn-git'
      className={classes.root}
      sx={{
        width: width,
        color: color,
        background: background,
        border: border
      }}
      size={size}
      onClick={event}
      type={type}
      disabled={disabled}
      startIcon={icons}
      href={href}
    >
      {text}
    </Button>
  )
}
