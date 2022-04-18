import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { Item } from '../../atoms/item/index'
import { NavRepos } from '../../organisms/nav/index'
import { NavFilters } from '../../organisms/nav-filters/index'
import { AvatarInfo } from '../../organisms/avatar-info/index'
import { FooterGrid } from '../../organisms/footer/index'

export const TamplateReposotories: any = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item>
            <NavRepos />
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item sx={{ margin: '5% 10%' }}>
            <AvatarInfo />
          </Item>
        </Grid>
        <Grid item xs={12} md={9}>
          <Item>
            <NavFilters />
          </Item>
        </Grid>
        <Grid item xs={12} md={12}>
          <Item>
            <FooterGrid />
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
