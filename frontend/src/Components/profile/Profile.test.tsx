import renderer from 'react-test-renderer';
import Profile from './Profile';


it('render Profile correctly', () => {
  const tree = renderer.create(<Profile  user={{
    avatar_url: '',
    bio: '',
    blog: '',
    company: '',
    created_at: new Date(),
    email: null,
    events_url: '',
    followers: 0,
    followers_url: '',
    following: 0,
    following_url: '',
    gists_url: '',
    gravatar_id: '',
    hireable: null,
    html_url: '',
    id: 0,
    location: '',
    login: '',
    name: '',
    node_id: '',
    organizations_url: '',
    public_gists: 0,
    public_repos: 0,
    received_events_url: '',
    repos_url: '',
    site_admin: false,
    starred_url: '',
    subscriptions_url: '',
    twitter_username: '',
    type: '',
    updated_at:new Date(),
    url: '',
    }}/>).toJSON();
  expect(tree).toMatchSnapshot();
});