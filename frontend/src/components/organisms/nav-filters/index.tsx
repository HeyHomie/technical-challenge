import * as React from 'react'
import { Box } from '@mui/system'
import { useAppSelector } from '../../../store/store'
import { selectRepos } from '../../../store/slice/api-repos'
import { SelectButton } from '../../molecules/button-select'
import { InputFilter } from '../../atoms/input'
import { Grid } from '@mui/material'
import { Item } from '../../atoms/item/index'

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

  console.log('lenguage', optionsLenguageRepo)
  console.log('filtro nombre', repoFilterName)
  return (
    <Box sx={{ margin: '8% 0%' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={7} display='flex' alignItems='center'>
          <Item display='flex' alignItems='center' marginLeft='5%' width='90%'>
            <InputFilter
              type='text'
              placeholder='Find a repository...'
              required={false}
              width='100%'
              event={handleEvent}
            />
          </Item>
        </Grid>
        <Grid item xs={6} md={5}>
          <Item display='flex' flexDirection='row'>
            <SelectButton text='Type' options={optionsTypeRepo} />
            <SelectButton text='Language' options={optionsTypeRepo} />
            <SelectButton text='Sort' options={optionsSortRepo} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  )

  //   const reposLength = data.repos.length
  //   return (
  //     <Box
  //       sx={{
  //         width: '100%',
  //         display: 'flex',
  //         flexDirection:'row',
  //         borderBottom: '1px solid #e0e0e0',
  //         marginTop: '7%',
  //         backgroundColor:'blue'
  //       }}
  //     >
  //       <Box width='50%' display='flex' alignContent='center' sx={{backgroundColor:'red'}}>
  //         <InputFilter type='text' placeholder='Find a repository...' required={false} width='80%'></InputFilter>
  //         </Box>
  //       <Box sx={{ width: '30%' }}>
  //         <Box  sx={{ border: '3%', borderColor: 'red', display: 'flex', flexDirection:'row'}}>
  //           <SelectButton />
  //           <SelectButton/>
  //           <SelectButton/>
  //         </Box>
  //       </Box>
  //       <Box sx={{ width: '20%' }}>
  //         <ButtonGit/>
  //       </Box>
  //     </Box>
  //   )
}
