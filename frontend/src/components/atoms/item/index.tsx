import { Box, BoxProps } from '@mui/system'

export const Item: any = (props: BoxProps) => {
  const { sx, ...other } = props
  return (
    <Box
      sx={{
        marginTop: 1,
        marginBottom: 1,
        color: 'black',
        ...sx
      }}
      {...other}
    />
  )
}
