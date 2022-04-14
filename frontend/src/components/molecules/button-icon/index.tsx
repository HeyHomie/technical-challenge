import { Box } from '@mui/system'
import { ButtonGit, PropsButton } from '../../atoms/button'
import { IconsGit, PropsIconSvg } from '../../atoms/svg-icons/index'

export interface PropsButtonIcon {
  button?: PropsButton
  icons?: PropsIconSvg
  margin?: string
}

export const ButtonIcon: any = ({ button, icons, margin }: PropsButtonIcon) => {
  return (
    <Box sx={{ display: 'flex', margin: { margin } }}>
      <ButtonGit
        icons={<IconsGit path={icons?.path} />}
        variant='contained'
        text={button?.text}
      />
    </Box>
  )
}
