import { Grid, Link } from '@mui/material'
import { Item } from '../../atoms/item/index'
import { ContactUser } from '../../molecules/contact-user/contact'
import { menuFooter } from './utiliti'

export const FooterGrid: any = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: '100%',
        backgroundColor: 'white',
        borderTop: '1px solid #e0e0e0',
        padding: '3%'
      }}
    >
      <Grid item xs={2}>
        <Item>
          <ContactUser
            contact='© 2022 GitHub, Inc.'
            icons={{
              path: 'M 8 0 C 3.58 0 0 3.58 0 8 c 0 3.54 2.29 6.53 5.47 7.59 c 0.4 0.07 0.55 -0.17 0.55 -0.38 c 0 -0.19 -0.01 -0.82 -0.01 -1.49 c -2.01 0.37 -2.53 -0.49 -2.69 -0.94 c -0.09 -0.23 -0.48 -0.94 -0.82 -1.13 c -0.28 -0.15 -0.68 -0.52 -0.01 -0.53 c 0.63 -0.01 1.08 0.58 1.23 0.82 c 0.72 1.21 1.87 0.87 2.33 0.66 c 0.07 -0.52 0.28 -0.87 0.51 -1.07 c -1.78 -0.2 -3.64 -0.89 -3.64 -3.95 c 0 -0.87 0.31 -1.59 0.82 -2.15 c -0.08 -0.2 -0.36 -1.02 0.08 -2.12 c 0 0 0.67 -0.21 2.2 0.82 c 0.64 -0.18 1.32 -0.27 2 -0.27 c 0.68 0 1.36 0.09 2 0.27 c 1.53 -1.04 2.2 -0.82 2.2 -0.82 c 0.44 1.1 0.16 1.92 0.08 2.12 c 0.51 0.56 0.82 1.27 0.82 2.15 c 0 3.07 -1.87 3.75 -3.65 3.95 c 0.29 0.25 0.54 0.73 0.54 1.48 c 0 1.07 -0.01 1.93 -0.01 2.2 c 0 0.21 0.15 0.46 0.55 0.38 A 8.013 8.013 0 0 0 16 8 c 0 -4.42 -3.58 -8 -8 -8 Z'
            }}
          />
        </Item>
      </Grid>
      <Grid item xs={10}>
        <Item>
          {menuFooter.map((option: any) => {
            return (
              <Link key={option} margin='2%' href='#' underline='hover'>
                {option}
              </Link>
            )
          })}
        </Item>
      </Grid>
    </Grid>
  )
}
