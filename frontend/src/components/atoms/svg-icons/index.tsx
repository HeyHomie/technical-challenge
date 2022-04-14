import { SvgIcon } from '@mui/material'

export interface PropsIconSvg {
  path?: string
}

export const IconsGit: any = ({ path }: PropsIconSvg) => {
  return (
    <SvgIcon fontSize='large' sx={{ paddingTop: '30%', paddingLeft: '30%' }}>
      <path d={path} />
    </SvgIcon>
  )
}
