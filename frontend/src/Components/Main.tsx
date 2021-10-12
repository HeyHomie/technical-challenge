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
  const [repositoriesSearch,setRepositoriesSearch] = useState<IRepository[]>([]);
  const [valueSearch,setValueSearch] = useState<string>('');
  
  
  useEffect(() => {
    const fetchApi = async () => {
      const {user,repositories,userExist} = await fetchGithubApi(username);
      
      if(userExist){
        setLoading(false);
        setUser(user);
        setRepositories(repositories)
      }else{
        setLoading(false);
  
      }
    }
  
    fetchApi()
    
  }, [username])
  
  
    if(loading) return (<Loading/>)
  
    return (
      <div className="application">
        <aside className="aside">
            <Profile user={user}/>
        </aside>
        <nav className="navbar">
            <Navigation total_repositories={repositories.length}/>
        </nav>
        <main className="main">
          <Search 
            valueSearch={valueSearch}
            setValueSearch={setValueSearch}
            repositories={repositories}
            setRepositoriesSearch={setRepositoriesSearch}
          />
          <GroupSelect>
            <Select  defaultValue='Type' options={['All','Fork']}/>
            <Select  defaultValue='Languages' options={['All','TypeScript','JavaScript','HTML']}/>
            <Select  defaultValue='Sort' options={['Last updated','Name','Stars']}/>
           </GroupSelect>
          <Repositories
           repositories={repositoriesSearch.length> 0 ? repositoriesSearch:repositories} />
            
        </main>
        <Footer/>
      </div>
    )
  }
  
  export default Main
  
