import React from 'react';
import { AiOutlinePaperClip, AiOutlineStar } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BiBuildings } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { AiOutlineTwitter } from 'react-icons/ai';
import { IUserGithub } from '../../interfaces/user.interface';
import './user-profile.css';

const UserProfile: React.FC<{ user: IUserGithub }> = ({ user }) => {
  if (!user) {
    console.log(user);
  }
  return (
    <aside className="profile">
      <div className="user">
        <ProfileUser
          avatar={user.avatar_url}
          name={user.name}
          login={user.login}
        />
      </div>
      {user.bio && <p className="bio">{user.bio}</p>}
      <button className="btn is-grey">Edit profile</button>
      <div className="links">
        <Links
          location={user.location}
          company={user.company}
          blog={user.blog}
          tw_username={user.twitter_username}
        />
      </div>
      <div className="followers">
        <Followers followers={user.followers} following={user.following} />
      </div>
      <div className="widgets">
        <strong>Achievements</strong>
        <img
          src="https://github.githubassets.com/images/modules/profile/badge--acv-64.png"
          alt="tag achievements"
        />
      </div>
    </aside>
  );
};

const ProfileUser: React.FC<any> = ({ avatar, name, login }) => {
  return (
    <>
      <img src={avatar} alt="profile image github account" />
      <div>
        <p>{name}</p>
        <span>{login}</span>
      </div>
    </>
  );
};

const Followers: React.FC<any> = ({ followers, following }) => {
  return (
    <>
      <div className="item">
        <BsFillPeopleFill color="#8b949e" />
        <strong>{followers}</strong>
        <span>followers</span>
      </div>
      <div className="item">
        <strong>{following}</strong>
        <span>following</span>
      </div>
      <div className="item">
        <AiOutlineStar color="#8b949e" />
        <strong>13</strong>
      </div>
    </>
  );
};

const Links: React.FC<any> = ({ tw_username, blog, company, location }) => {
  return (
    <>
      {blog && (
        <div className="link blog">
          <AiOutlinePaperClip color="#8b949e" />
          <a target="_blank" href={blog}>
            {blog}
          </a>
        </div>
      )}
      {company && (
        <div className="link company">
          <BiBuildings color="#8b949e" />
          <span>{company}</span>
        </div>
      )}
      {location && (
        <div className="link location">
          <GoLocation color="#8b949e" />
          <span>{location}</span>
        </div>
      )}
      {tw_username && (
        <div className="link twitter">
          <AiOutlineTwitter color="#8b949e" />
          <a target="_blank" href={`https://twitter.com/${tw_username}`}>
            {tw_username}
          </a>
        </div>
      )}
    </>
  );
};

export default UserProfile;
