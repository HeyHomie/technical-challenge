import './repositories.css';
import Repository from '../repository/Repository';
import {IRepository} from '../../interfaces/repository.interface';

interface Props{
  repositories:IRepository[]
}


const Repositories = ({repositories}: Props) => {
  return (
    <div className="repositories"> 
      {
        repositories.map((repo,index)=>(
          <Repository 
             key={index}
             name={repo.name} 
             description={repo.description}
             language={repo.language}
             visibility={repo.visibility}
             owner={repo.owner}
             pushed_at={repo.pushed_at}
             license={repo.license}
             stargazers_count={repo.stargazers_count}
             />
        ))

      }
    </div>
  )
}

export default Repositories
