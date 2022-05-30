import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getUserInfo } from '../help/request'
import Filter from './Filter/Filter'
import ProfileInformation from './ProfileInformation/ProfileInformation'
import RepoCard from './RepoCard/RepoCard'

export default function Main(props) {
  const API_URL = 'https://api.github.com/'
  const { username } = useParams()
  const [User, setUser] = useState([])
  const [Repos, setRepos] = useState([])

  useEffect(() => {
    getUserInfo(`${API_URL}users/${username}`).then((resp) => {
      setUser(resp)
      props.setRepositories(resp.public_repos)
    })
  }, [username])

  useEffect(() => {
    getUserInfo(`${API_URL}users/${username}/repos`).then((resp) =>
      setRepos(resp)
    )
  }, [User])
  return (
    <Container>
      <Row>
        <Col xs={12} lg={3}>
          {User && <ProfileInformation user={User} />}
        </Col>
        <Col>
          <Filter repos={Repos} />
          {Repos.length > 0 &&
            Repos.map((repo) => (
              <RepoCard
                name={repo.name}
                description={repo.description}
                topics={repo.topics}
                visibility={repo.visibility}
                updated_at={repo.updated_at}
                language={repo.language}
                stargazers_count={repo.stargazers}
                forks_counts={repo.forkers}
                license={repo.license}
                username={User.login}
                key={repo.name}
              />
            ))}
        </Col>
      </Row>
    </Container>
  )
}
