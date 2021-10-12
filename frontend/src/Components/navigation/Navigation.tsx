import './navigation.css';
import {BsBook} from 'react-icons/bs'
import {RiGitRepositoryLine} from 'react-icons/ri'
import {AiOutlineProject} from 'react-icons/ai'
import {FiPackage} from "react-icons/fi"

interface Props {
  total_repositories:number
}

const Navigation = ({total_repositories}:Props) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <BsBook className='navigation__icon'/> 
         <span>Overview</span>
        </li>
        <li className="navigation__item navigation__item--active">
          <RiGitRepositoryLine className='navigation__icon'/>
          <span>Repositories</span>
          <span className='navigation__repositories'>{total_repositories}</span>
        </li>
        <li className="navigation__item">
          <AiOutlineProject className='navigation__icon'/>
         <span>Projects</span>
        </li>
        <li className="navigation__item">
          <FiPackage className='navigation__icon'/>
         <span>Packages</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
