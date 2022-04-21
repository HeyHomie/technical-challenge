interface IHeader {
    avatarUrl: string
}

import menuIcon from '../../assets/menu.png';
import logoIcon from '../../assets/logo.png';
import notificationIcon from '../../assets/notification.png';
import addIcon from '../../assets/plus.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Header({ avatarUrl }: IHeader) {
    const [username, setUsername] = useState('');

    const getRepos = () => {
        window.open(`/user/${username && username.length >= 1 ? username : 'yknx4'}`, '_self');
    }

    return (
        <div id="header">
            <img src={menuIcon} alt="menu" id="menu-icon" />
            <div id="header-left">
                <div id="logo">
                    <img src={logoIcon} alt="logo" />
                </div>
                <div id="header-search">
                    <input placeholder="Search or jump to..." type="text" onChange={(e) => { setUsername(e.target.value) }} />
                    <button>/</button>
                </div>
                <div id="header-links">
                    <div className="link" onClick={() => getRepos()}>Search</div>
                    <div className="link"><Link to="/repos/*" className="white-links">All Repos</Link></div>
                    <div className="link"><Link to="/about" className="white-links">About</Link></div>
                </div>
            </div>
            <div className="flex"></div>
            <div id="header-right">
                <div id="header-icons">
                    <button id="notification-btn">
                        <img  className="icon" src={notificationIcon} alt="notification icon" />
                    </button>
                    <button id="plus-btn">
                        <img  className="icon" src={addIcon} alt="add icon" />
                        <span>&#9662;</span>
                    </button>
                    <button id="avatar-btn">
                        <img className="avatar" src={avatarUrl} alt="add icon" />
                        <span>&#9662;</span>
                    </button>
                </div>
            </div>
        </div>
    );
};