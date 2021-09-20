import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { IRepositories } from "../../interfaces/repositories.interface";
import "./repo-card.css";

type TTopics = {
  names: string[];
};

const RepoCard: React.FC<{ repo: IRepositories }> = ({ repo }) => {
  // const [topics, setTopics] = React.useState<TTopics>({ names: [] });
  // const user = repo.owner.login;
  // const baseUrl = "https://api.github.com";

  // async function getTopics() {
  //   const response = await fetch(
  //     `${baseUrl}/repos/${user}/${repo.name}/topics`,
  //     {
  //       headers: {
  //         Accept: "application/vnd.github.mercy-preview+json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   setTopics(data);
  // }

  // React.useEffect(() => {
  //   getTopics();
  //   return () => {};
  // }, []);

  return (
    <article className="repo">
      <div className="content">
        <div className="headline">
          <div className="title">
            <CardHeadline
              name={repo.name}
              isPrivate={repo.private}
              url={repo.html_url}
            />
          </div>
          <p className="repo-description">{repo.description}</p>
        </div>
        <div className="topics">
          {/* {topics.names.map((topic, idx) => (
            <a
              target="_blank"
              href={`https://github.com/topics/${topic}`}
              key={idx}
            >
              {topic}
            </a>
          ))} */}
        </div>
        <div className="details">
          <div className="language">
            {repo.language && (
              <GoPrimitiveDot size={18} className={`is-${repo.language}`} />
            )}
            <span>{repo.language}</span>
          </div>
        </div>
      </div>
      <button className="btn is-grey">
        <AiOutlineStar size={16} />
        <span>star</span>
      </button>
    </article>
  );
};

const CardHeadline: React.FC<any> = ({ name, isPrivate, url }) => {
  return (
    <>
      <h3>
        <a href={url} target="_blank">
          {name}
        </a>
      </h3>
      <small>{isPrivate ? "private" : "public"}</small>
    </>
  );
};

export default RepoCard;
