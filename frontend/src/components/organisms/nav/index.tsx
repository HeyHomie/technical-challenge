import * as React from 'react'
import { Box } from '@mui/system'
import { ButtonIcon } from '../../molecules/button-icon/index'
import { StyledBadge } from '../../atoms/badge/index'
import { useAppSelector } from '../../../store/store'
import { selectRepos } from '../../../store/slice/api-repos'

export const NavRepos: any = () => {
  const { data } = useAppSelector(selectRepos)
  const reposLength = data.repos.length
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        position: 'fixed',
        backgroundColor: 'white',
        borderBottom: '1px solid #e0e0e0',
        marginTop: '0%'
      }}
    >
      <Box sx={{ width: '30%' }}>{/* avatar y nombre miniatura */}</Box>
      <Box sx={{ width: '70%' }}>
        <Box
          sx={{
            border: '3%',
            borderColor: 'red',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <ButtonIcon
            margin='2%'
            button={{ text: 'Overview' }}
            icons={{
              path: 'M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z'
            }}
          />
          <StyledBadge badgeContent={reposLength} overlap='circular'>
            <ButtonIcon
              margin='2%'
              button={{ text: 'Repositories' }}
              icons={{
                path: 'M 2 2.5 A 2.5 2.5 0 0 1 4.5 0 h 8.75 a 0.75 0.75 0 0 1 0.75 0.75 v 12.5 a 0.75 0.75 0 0 1 -0.75 0.75 h -2.5 a 0.75 0.75 0 1 1 0 -1.5 h 1.75 v -2 h -8 a 1 1 0 0 0 -0.714 1.7 a 0.75 0.75 0 0 1 -1.072 1.05 A 2.495 2.495 0 0 1 2 11.5 v -9 Z m 10.5 -1 V 9 h -8 c -0.356 0 -0.694 0.074 -1 0.208 V 2.5 a 1 1 0 0 1 1 -1 h 8 Z M 5 12.25 v 3.25 a 0.25 0.25 0 0 0 0.4 0.2 l 1.45 -1.087 a 0.25 0.25 0 0 1 0.3 0 L 8.6 15.7 a 0.25 0.25 0 0 0 0.4 -0.2 v -3.25 a 0.25 0.25 0 0 0 -0.25 -0.25 h -3.5 a 0.25 0.25 0 0 0 -0.25 0.25 Z'
              }}
            />
          </StyledBadge>
          <ButtonIcon
            margin='2% 2% 2% 7%'
            button={{ text: 'Projects' }}
            icons={{
              path: 'M 0 1.75 C 0 0.784 0.784 0 1.75 0 h 12.5 C 15.216 0 16 0.784 16 1.75 v 3.585 a 0.746 0.746 0 0 1 0 0.83 v 8.085 A 1.75 1.75 0 0 1 14.25 16 H 6.309 a 0.748 0.748 0 0 1 -1.118 0 H 1.75 A 1.75 1.75 0 0 1 0 14.25 V 6.165 a 0.746 0.746 0 0 1 0 -0.83 V 1.75 Z M 1.5 6.5 v 7.75 c 0 0.138 0.112 0.25 0.25 0.25 H 5 v -8 H 1.5 Z M 5 5 H 1.5 V 1.75 a 0.25 0.25 0 0 1 0.25 -0.25 H 5 V 5 Z m 1.5 1.5 v 8 h 7.75 a 0.25 0.25 0 0 0 0.25 -0.25 V 6.5 h -8 Z m 8 -1.5 h -8 V 1.5 h 7.75 a 0.25 0.25 0 0 1 0.25 0.25 V 5 Z'
            }}
          />
          <ButtonIcon
            margin='2%'
            button={{ text: 'Packages' }}
            icons={{
              path: 'M 8.878 0.392 a 1.75 1.75 0 0 0 -1.756 0 l -5.25 3.045 A 1.75 1.75 0 0 0 1 4.951 v 6.098 c 0 0.624 0.332 1.2 0.872 1.514 l 5.25 3.045 a 1.75 1.75 0 0 0 1.756 0 l 5.25 -3.045 c 0.54 -0.313 0.872 -0.89 0.872 -1.514 V 4.951 c 0 -0.624 -0.332 -1.2 -0.872 -1.514 L 8.878 0.392 Z M 7.875 1.69 a 0.25 0.25 0 0 1 0.25 0 l 4.63 2.685 L 8 7.133 L 3.245 4.375 l 4.63 -2.685 Z M 2.5 5.677 v 5.372 c 0 0.09 0.047 0.171 0.125 0.216 l 4.625 2.683 V 8.432 L 2.5 5.677 Z m 6.25 8.271 l 4.625 -2.683 a 0.25 0.25 0 0 0 0.125 -0.216 V 5.677 L 8.75 8.432 v 5.516 Z'
            }}
          />
          <ButtonIcon
            margin='2%'
            button={{ text: 'Stars' }}
            icons={{
              path: 'M 8 0.25 a 0.75 0.75 0 0 1 0.673 0.418 l 1.882 3.815 l 4.21 0.612 a 0.75 0.75 0 0 1 0.416 1.279 l -3.046 2.97 l 0.719 4.192 a 0.75 0.75 0 0 1 -1.088 0.791 L 8 12.347 l -3.766 1.98 a 0.75 0.75 0 0 1 -1.088 -0.79 l 0.72 -4.194 L 0.818 6.374 a 0.75 0.75 0 0 1 0.416 -1.28 l 4.21 -0.611 L 7.327 0.668 A 0.75 0.75 0 0 1 8 0.25 Z m 0 2.445 L 6.615 5.5 a 0.75 0.75 0 0 1 -0.564 0.41 l -3.097 0.45 l 2.24 2.184 a 0.75 0.75 0 0 1 0.216 0.664 l -0.528 3.084 l 2.769 -1.456 a 0.75 0.75 0 0 1 0.698 0 l 2.77 1.456 l -0.53 -3.084 a 0.75 0.75 0 0 1 0.216 -0.664 l 2.24 -2.183 l -3.096 -0.45 a 0.75 0.75 0 0 1 -0.564 -0.41 L 8 2.694 v 0.001 Z'
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
