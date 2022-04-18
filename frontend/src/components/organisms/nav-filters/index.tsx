import * as React from 'react'
import { Box } from '@mui/system'
import { useAppSelector } from '../../../store/store'
import { selectRepos } from '../../../store/slice/api-repos'
import { SelectButton } from '../../molecules/button-select'
import { InputFilter } from '../../atoms/input'
import { Grid } from '@mui/material'
import { Item } from '../../atoms/item/index'
import { RepositoriesForUser } from '../list-respositories/index'

export const NavFilters: any = () => {
  const [inputValue, setInoutValue] = React.useState<any>('')
  const { data } = useAppSelector(selectRepos)
  const listRepos = data.repos
  const optionsSortRepo = ['Last update', 'Name', 'Stars']
  const optionsTypeRepo = ['Public', 'Private', 'Source', 'Forks', 'Archived']

  const handleEvent: any = (e: any) => {
    setInoutValue(e.target.value)
  }
  const repoFilterName = listRepos.filter(
    (repo: any) => repo.name === inputValue
  )
  const optionsLenguage = listRepos.map((repo: any) => repo.language)
  const optionsLenguageRepo = optionsLenguage.filter(
    (lenguage: string, index: number) => {
      return optionsLenguage.indexOf(lenguage) === index
    }
  )

  return (
    <Box sx={{ margin: '7% 1% ' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} display='flex' alignItems='center'>
          <Item display='flex' alignItems='center' marginLeft='5%' width='80%'>
            <InputFilter
              type='text'
              placeholder='Find a repository...'
              required={false}
              width='80%'
              event={handleEvent}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            display='flex'
            flexDirection='row'
            margin='8%'
            justifyContent='end'
          >
            <SelectButton text='Type' options={optionsTypeRepo} />
            <SelectButton text='Language' options={optionsLenguageRepo} />
            <SelectButton text='Sort' options={optionsSortRepo} />
          </Box>
        </Grid>
      </Grid>
      <hr />
      <Box margin='3%'>
        <RepositoriesForUser option={repoFilterName} />
      </Box>
    </Box>
  )
}
