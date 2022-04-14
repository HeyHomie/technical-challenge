import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: '-15%',
    top: '50%',
    border: '2px solid #e0e0e0',
    padding: '0 4px',
    backgroundColor: '#e0e0e0',
    color: 'black'
  }
}))
