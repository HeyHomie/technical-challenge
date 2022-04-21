import { Repo } from './../repo';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

interface IReposProps {
    repos?: Array<any>
}

export function ReposSection({ repos }: IReposProps) {
    const { username } = useParams<{ username: string }>();
    const [repositories, setRepositories] = useState(repos);
    const [searchParam, setSearchParam] = useState('');

    const url = () => {
        let url = `/api/v1/repositories?${ (username && username.length) ? `username=${username}&` : '' }`
        url += `search_param=${searchParam.length >= 1 ? searchParam : '*'}`
        return url
    }
    // 163music-mac-client-unlock
    const getRepos = () => {
        const fetchData = async () => {
            const data = await fetch(url());
            const json = await data.json();
            setRepositories(json);
        }
        fetchData();
    }

    return (
        <div id='repo-section'>
            <div className="search-repo">
                <input placeholder="Find a repository..." type="text" onChange={(e) => { setSearchParam(e.target.value) }} />
                <div className="search-repo-btns">
                    <button id="new-repo-btn" onClick={() => getRepos()}>
                        <span>Search</span>
                    </button>
                </div>
            </div>
            <div id="repos">
                {
                    repositories && repositories.length >= 1 &&
                        repositories.map((repo) => {
                           return <Repo repo={repo} key={repo.id} />
                        })
                }
            </div>
        </div>
    );
}

