import { ReposSection } from "../repo_section";

interface ITab {
    repos_count: string
}
export function Tab({ repos_count }:ITab ) {
    return (
        <div id="tab">
            <button className="active">
                <span className="description">Repositories</span>
                <div className="count">{repos_count}</div>
            </button>
        </div>
    );
}
