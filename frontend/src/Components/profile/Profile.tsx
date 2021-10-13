import "./profile.css";
import {TiStarOutline} from 'react-icons/ti';
import {HiOutlineOfficeBuilding} from 'react-icons/hi';
import {FiMapPin,FiUsers} from 'react-icons/fi';
import {BsLink45Deg,BsTwitter} from 'react-icons/bs'

import Avatar from './avatar/Avatar';
import Button from '../common/button/Button';
import Information from './information/Information';
import InformationLink from './information/informationLink/InformationLink';
import Contact from './contacts/Contact'
import ContactLink from './contacts/contactLink/ContactLink';

import {IUser} from '../../interfaces/user.interface';

interface Props{
  user:IUser
}


const Profile = ({user}:Props) => {
  
  const {
    avatar_url,name,
    login:nickname,
    bio,
    followers,
    following,
    company,
    location,
    blog,
    twitter_username} = user;

  return (
    <div className="profile">
    <div className="profile__user">
      <Avatar  avatar_url={avatar_url} name={name} nickname={nickname}/>
    </div>
    <div className="profile__buttons">
          <Button size='large' value='Edit profile'/>  
    </div>
    <div className="profile__details">
      <p className="biography">{bio}</p>
        <Information>
          <InformationLink text='Followers' value={followers} icon={FiUsers}/>
          <InformationLink text='Following' value={following} />
          <InformationLink text='Stars' value={55} icon={TiStarOutline}/>
        </Information>
    </div>
    <div className="profile__contact">
      <Contact>
    	  {company &&  <ContactLink icon={HiOutlineOfficeBuilding} value={company} link={false}/>}
        {location && <ContactLink icon={FiMapPin} value={location} link={false}/>}
        {blog &&  <ContactLink icon={BsLink45Deg} value={blog}/>}
        {twitter_username && <ContactLink icon={BsTwitter} value={twitter_username} link={false}/>}
      </Contact>
    </div>
  </div>
  )
}

export default Profile
