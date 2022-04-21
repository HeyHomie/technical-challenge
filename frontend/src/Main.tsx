import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileSection } from './components/profile_section';
import { ReposSection } from './components/repo_section';
import { Tab } from './components/tab';
import { Header } from './components/header';
import './index.css';

export default function Main() {
    const { username } = useParams<{ username: string }>()
    const [user, setUser] = useState<any>({})
    const [repos, setRepos] = useState<Array<any>>([])
    useEffect(() => {
        Promise.all(
            [
                fetch(`/api/v1/users?username=${username}`),
                fetch(`/api/v1/repositories?username=${username}`)
            ]
        ).then(async ([user, repos]) => {
            setUser(await user.json())
            setRepos(await repos.json())
        })
    }, [username]);
    return (
        user && repos && (
            <div className="App">
                {user.avatar_url &&
                    <Header avatarUrl={'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg'} />
                }
                <div id="contents">
                    <ProfileSection user={user} />
                    <Tab repos_count={user.public_repos}/>
                    { repos.length >= 1 && <ReposSection repos={repos} />}
                </div>
            </div>
        )
    )
}