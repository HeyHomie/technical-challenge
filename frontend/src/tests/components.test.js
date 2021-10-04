import TestRenderer from 'react-test-renderer'
import { Repo, Loader, Profile, Footer, Navbar, Paginator, Search } from '../components'

describe('Components', () => {
  it('renders repo component correctly', () => {
    const repo = {
      id: 1,
      github_id: 1,
      url: 'github.com/testuser/testrepo',
      name: 'testrepo',
      user_id: 1,
      fork: false,
      description: 'This is a test repo',
      language: null,
      stars: 0,
      forks: 1,
      license: 'MIT',
      last_updated: '2021-10-04 02:07:07',
      archived: false,
      private: false,
      created_at: '2021-10-04 02:07:07',
      updated_at: '2021-10-04 02:07:07'
    }

    const tree = TestRenderer
      .create(<Repo repo={repo}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders loader component correctly', () => {
    const tree = TestRenderer
      .create(<Loader/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders profile component correctly', () => {
    const user = {
      id: 1,
      login: 'TestUser',
      github_id: 1,
      url: 'github.com/testuser',
      name: 'User',
      email: 'test@user.com',
      avatar_url: 'github.com/testuser',
      bio: null,
      company: null,
      location: null,
      blog: null,
      twitter_username: null,
      followers: 0,
      following: 0,
      created_at: '2021-10-04 02:07:07',
      updated_at: '2021-10-04 02:07:07'
    }

    const tree = TestRenderer
      .create(<Profile user={user}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders footer component correctly', () => {
    const tree = TestRenderer
      .create(<Footer/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders navbar component correctly', () => {
    const tree = TestRenderer
      .create(<Navbar count={1}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders paginator component correctly', () => {
    const pageInfo = {
      page: 1,
      perPage: 5,
      totalCount: 1,
      totalPages: 1
    }

    const tree = TestRenderer
      .create(
        <Paginator 
        pageInfo={pageInfo} 
        handleChange={() => {alert('Paginator test!')}}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders search component correctly', () => {
    const tree = TestRenderer
      .create(<Search page={1} onSearch={() => {alert('Search test!')}}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
