interface IProfile {
    user: any
}

import companyIcon from '../../assets/company.svg';
import locationIcon from '../../assets/location.svg';

export function ProfileSection({ user}: IProfile) {
    return (
        <div id='profile-section'>
            <div className="profile">
                <div className="avatar">
                    <img src={user.avatar_url} alt="" />
                </div>
                <div id='personal-info'>
                    <div className="name">{user.name}</div>
                    <div className="username">{user.login}</div>
                </div>
            </div>
            <div className="bio" style={{ marginTop: 10 }}>{ user.bio }</div>
            <div style={{ marginTop: 10 }}>{ user.followers } followers . { user.following } following</div>
            <div style={{listStyleType: 'none', alignContent: 'flex-end', marginTop: 10}}>
                <li><img src={companyIcon} width={16} height={16} /> { user.company }</li>
                <li><img src={locationIcon} width={16} height={16} /> { user.email }</li>
            </div>
        </div>
    );
}

