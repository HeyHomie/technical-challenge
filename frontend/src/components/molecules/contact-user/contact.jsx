import { Box } from '@mui/system'
import { Link} from '@mui/material'
import { IconsGit, PropsIconSvg} from '../../atoms/svg-icons'


export type PropsContactUser = {
    icons?:PropsIconSvg;
    contact?:String;
}

export const ContactUser = ({icons, contact}:PropsContactUser) => {
  return (
      <Link
        underline="none"
        href="#"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          color: '#57606A',
          '&:hover': { color: 'blue' }
        }}>
        <IconsGit
          paddingTop="0%"
          paddingLeft="0%"
          path={icons.path}
        />
        <span style={{color:'#24292F'}}>{contact}</span>
      </Link>
    
  )
}
