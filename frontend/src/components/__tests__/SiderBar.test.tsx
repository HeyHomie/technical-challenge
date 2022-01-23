import { render } from '@testing-library/react'
import { SideBar } from '..'

describe('Render sideBar', () => {
  it('should render sideBar', () => {
    const profile_mock = {
      id: 1,
      avatar_url: 'avatar_url',
      bio: 'bio',
      name: 'name',
      login: 'login',
      followers: 2,
      following: 3,
      location: 'location',
      email: 'email',
      blog: 'blog',
      company: 'company',
      twitter_username: 'twitter_username',
      public_repos: 34
    }

    const { container } = render(<SideBar profile={profile_mock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
