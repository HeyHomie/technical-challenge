import * as utilsTime from './../../utils/date';
import * as lanColor from './../../utils/lanColor';

interface IRepo {
    repo: any
}

export function Repo({ repo }: IRepo) {
    
    const openLink = (repo_url: string) => {
        window.open(repo_url, "_blank");
    }

    return (
        <div className="repo">
            <div className="repo-left">
                <div className="repo-name">
                    <span onClick={() => openLink(repo.html_url)}>{repo.name}</span>
                    <span className="repo-type">{ repo.private ? 'private' : 'public' }</span>
                </div>
                <div>
                    {repo.description} 
                </div>
                <div className="repo-other-info">
                    {
                        repo.language ? (
                            <div className="lang">
                                <div className="lang-color" style={{ backgroundColor: lanColor.color(repo.language) }}></div>
                                <span>{repo.language}</span>
                            </div>
                        )
                            : null
                    }
                    <div className="date">{ utilsTime.getLocalTime(repo.updated_at) }</div>
                </div>
            </div>

            <div className="flex"></div>

            <div className="star-btn">
                <button>
                    <span>&#x2606;</span>
                    <span>Star</span>
                </button>
            </div>
        </div>
    );
}

