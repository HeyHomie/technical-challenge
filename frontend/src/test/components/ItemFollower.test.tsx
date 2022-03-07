import { render } from '@testing-library/react'
import { ItemFollower } from '../../components/ItemFollower/ItemFollower'
import { followersInterface } from '../../interfaces/Followers'

describe('Testing the ItemFollower component', () => {
  test('should display username', () => {
    const userProfile: followersInterface = {
      login: 'jontg',
      id: 309263,
      node_id: 'MDQ6VXNlcjMwOTI2Mw==',
      avatar_url: 'https://avatars.githubusercontent.com/u/309263?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/jontg',
      html_url: 'https://github.com/jontg',
      followers_url: 'https://api.github.com/users/jontg/followers',
      following_url:
        'https://api.github.com/users/jontg/following{/other_user}',
      gists_url: 'https://api.github.com/users/jontg/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/jontg/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/jontg/subscriptions',
      organizations_url: 'https://api.github.com/users/jontg/orgs',
      repos_url: 'https://api.github.com/users/jontg/repos',
      events_url: 'https://api.github.com/users/jontg/events{/privacy}',
      received_events_url: 'https://api.github.com/users/jontg/received_events',
      type: 'User',
      site_admin: false
    }
    const { getByText } = render(<ItemFollower {...userProfile} />)
    expect(getByText(userProfile.login)).toBeInTheDocument()
  })
})
