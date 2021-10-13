import renderer from 'react-test-renderer';
import Repository from './Repository';


it('render Repository correctly', () => {
  const tree = renderer.create(<Repository 
    name={'name repository'} 
    description={'description repository'}
    language={'language'}
    visibility={'public'}
    owner={{
      avatar_url: '',
      events_url:'',
      followers_url: '',
      following_url: '',
      gists_url: '',
      gravatar_id: '',
      html_url: '',
      id: 0,
      login: '',
      node_id: '',
      organizations_url: '',
      received_events_url: '',
      repos_url: '',
      site_admin: true,
      starred_url: '',
      subscriptions_url: '',
      type: '',
      url: ''
    }}

    pushed_at={new Date()}
    license={{key: '',
      name:'', 
      spdx_id: '', 
      url: '', 
      node_id: '', }}
    stargazers_count={12}
    
    />).toJSON();
  expect(tree).toMatchSnapshot();
});