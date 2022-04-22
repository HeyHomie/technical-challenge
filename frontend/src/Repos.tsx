import { useParams } from 'react-router-dom';
import { ReposSection } from './components/repo_section';
import { Header } from './components/header';
import './index.css';
import { useEffect, useState } from 'react';

export default function Repos() {

    const { reponame } = useParams<{ reponame: string }>()
    const [repos, setRepos] = useState<Array<any>>([]);

    useEffect(() => {
        Promise.all(
            [fetch(`/api/v1/repositories?search_param=${reponame}`)]
        ).then(async ([repos]) => {
            setRepos(await repos.json())
        })
    }, []);

    return (
        <div className="App">
            <Header avatarUrl={`https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg`} />
            <div id="contents">
                {repos.length >= 1 && <ReposSection repos={repos} />}
            </div>
        </div>
    );
}