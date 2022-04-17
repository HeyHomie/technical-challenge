import { useAppSelector } from '../../../store/store'
import { selectRepos } from '../../../store/slice/api-repos'
import { Box } from '@mui/system'
import { CardInfoRepositor } from '../../molecules/cards/index'

export interface PropsCarRepo {
  option: object[]
}

export const RepositoriesForUser: any = ({ option = [] }: PropsCarRepo) => {
  let dataRepo = []
  let licence = ''

  if (option.length === 0) {
    const { data } = useAppSelector(selectRepos)
    dataRepo = data.repos
  }

  return (
    <Box>
      {dataRepo.length !== 0
        ? dataRepo.map((repo: any) => {
          repo.license !== null
            ? (licence = repo.license.name)
            : (licence = '')
          return (
            <div key={repo.name}>
              <CardInfoRepositor
                name={repo.name}
                description={repo.description}
                langage={repo.language}
                visibility={repo.visibility}
                update={repo.updated_at}
                licence={licence}
              />
              <hr />
            </div>
          )
        })
        : option.map((repo: any) => {
          return (
            <div key={repo.name}>
              <CardInfoRepositor
                name={repo.name}
                description={repo.description}
                langage={repo.language}
                visibility={repo.visibility}
                update={repo.updated_at}
                licence={licence}
              />
              <hr />
            </div>
          )
        })}
    </Box>
  )
}
