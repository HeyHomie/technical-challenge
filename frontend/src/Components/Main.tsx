import './main.css'
import {useState,useEffect} from 'react';
import {fetchGithubApi} from '../api/githubApi';
import {useParams} from 'react-router-dom'
import Navigation from './navigation/Navigation'
import Profile from "./profile/Profile";
import Search from './search/Search';
import GroupSelect from './select/groupSelect/GroupSelect';
import  Select from "./select/Select"
import Repositories from './repositories/Repositories';
import Footer from './footer/Footer';
import Loading from './loading/Loading';
import {IUser} from '../interfaces/user.interface'
import { IRepository } from '../interfaces/repository.interface';
import Pagination from './pagination/Pagination';
import Button from './common/button/Button';
import {BiBookBookmark} from 'react-icons/bi'



const Main = () => {

  const {username} = useParams<{username:string}>();

  const [loading,setLoading] = useState<Boolean>(true);
  
  const [user, setUser] = useState<IUser>({
    avatar_url: '',
    bio: '',
    blog: '',
    company: '',
    created_at: new Date(),
    email: null,
    events_url: '',
    followers: 0,
    followers_url: '',
    following: 0,
    following_url: '',
    gists_url: '',
    gravatar_id: '',
    hireable: null,
    html_url: '',
    id: 0,
    location: '',
    login: '',
    name: '',
    node_id: '',
    organizations_url: '',
    public_gists: 0,
    public_repos: 0,
    received_events_url: '',
    repos_url: '',
    site_admin: false,
    starred_url: '',
    subscriptions_url: '',
    twitter_username: '',
    type: '',
    updated_at:new Date(),
    url: '',
    }
  );
  
  const [repositories,setRepositories] =useState<IRepository[]>([]);
  
  const [valueSearch,setValueSearch] = useState<string>('');

  const [totalPage,setTotalPage] = useState<number>(1);
  
  const [currentPage,setCurrentPage] = useState<number>(1);

  const [valueSelect,setValueSelect] = useState<string>('pushed'); 


  
  useEffect(() => {
    
    const fetchApi = async () => {
    
      const numberItemByPage:number = 5; 
      
      const args = {
        username,
        numberItemByPage,
        currentPage,
        valueSelect
      }
      
      const {user,repositories,userExist} = await fetchGithubApi(args);
      
      const totalPage = Math.ceil(user.public_repos/numberItemByPage);
      
      if(userExist){
        setLoading(false);
        setUser(user);
        setTotalPage(totalPage)
        setRepositories(repositories)
      }else{
        setLoading(false);
  
      }
    }
  
    fetchApi()
    
  }, [username,currentPage,valueSelect])
  
  
  if(loading) return (<Loading/>)


  /**
   * method that filter by name 
   */
  const listRepositories = repositories.filter(
    (repo: any) => repo.name.toLowerCase().indexOf(valueSearch) !== -1
  );

 

    return (
      <div className="application">
        <aside className="aside">
            <Profile user={user}/>
        </aside>
        <nav className="navbar">
            <Navigation total_repositories={user.public_repos}/>
        </nav>
        <main className="main">
          <Search 
            valueSearch={valueSearch}
            setValueSearch={setValueSearch}
         
          />
          <GroupSelect>
            <Select setValueSelect={setValueSelect}  defaultValue={valueSelect} options={[
              {value:'full_name',name:'Name'},
              {value:'pushed',name:'Last updated'}
              ]}/>
            <Button size="medium" icon={BiBookBookmark} value="New" color='green'/>
           </GroupSelect>
           <Repositories repositories={listRepositories} />
             <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage}/>
           
        </main>  
        <Footer/>
      </div>
    )
  }
  
  export default Main
  
