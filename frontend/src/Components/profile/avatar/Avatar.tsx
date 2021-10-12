import './avatar.css';

interface Props {
  avatar_url:string;
  name:string;
  nickname:string;
}

const Avatar = ({avatar_url,name,nickname}: Props) => {
  return (
    <div className="avatar">
        <figure className="avatar__image">
          <img src={avatar_url} alt="username" title="username" width="80" height="80"  loading="lazy" />
        </figure>
        <div className="avatar__info">
         <p className="avatar__fullname">{name}</p>
         <p className="avatar__username">{nickname}</p>
        </div>
      </div>
  )
}

export default Avatar
