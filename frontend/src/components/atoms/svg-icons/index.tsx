import { SvgIcon } from '@mui/material'

export interface PropsIconSvg {
  path?: string
  width?: string
  paddingTop?: string
  paddingLeft?: string
}

export const IconsGit: any = ({
  path,
  width,
  paddingTop = '30%',
  paddingLeft = '30%'
}: PropsIconSvg) => {
  return (
    <SvgIcon
      sx={{
        paddingTop: { paddingTop },
        paddingLeft: { paddingLeft },
        width: { width }
      }}
    >
      <path d={path} />
    </SvgIcon>
  )
}
