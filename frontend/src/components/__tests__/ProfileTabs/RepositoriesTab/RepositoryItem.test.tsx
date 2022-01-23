import { render } from '@testing-library/react'
import { RepositoryItem } from '../../../'

export const repositoryMock = {
  id: 158453569,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNTg0NTM1Njk=',
  name: 'midu.dev',
  full_name: 'midudev/midu.dev',
  private: false,
  owner: {
    login: 'midudev',
    id: 1561955,
    node_id: 'MDQ6VXNlcjE1NjE5NTU=',
    avatar_url: 'https://avatars.githubusercontent.com/u/1561955?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/midudev',
    html_url: 'https://github.com/midudev',
    followers_url: 'https://api.github.com/users/midudev/followers',
    following_url:
      'https://api.github.com/users/midudev/following{/other_user}',
    gists_url: 'https://api.github.com/users/midudev/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/midudev/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/midudev/subscriptions',
    organizations_url: 'https://api.github.com/users/midudev/orgs',
    repos_url: 'https://api.github.com/users/midudev/repos',
    events_url: 'https://api.github.com/users/midudev/events{/privacy}',
    received_events_url: 'https://api.github.com/users/midudev/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/midudev/midu.dev',
  description: 'midu.dev blog 📝',
  fork: false,
  url: 'https://api.github.com/repos/midudev/midu.dev',
  forks_url: 'https://api.github.com/repos/midudev/midu.dev/forks',
  keys_url: 'https://api.github.com/repos/midudev/midu.dev/keys{/key_id}',
  collaborators_url:
    'https://api.github.com/repos/midudev/midu.dev/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/midudev/midu.dev/teams',
  hooks_url: 'https://api.github.com/repos/midudev/midu.dev/hooks',
  issue_events_url:
    'https://api.github.com/repos/midudev/midu.dev/issues/events{/number}',
  events_url: 'https://api.github.com/repos/midudev/midu.dev/events',
  assignees_url:
    'https://api.github.com/repos/midudev/midu.dev/assignees{/user}',
  branches_url:
    'https://api.github.com/repos/midudev/midu.dev/branches{/branch}',
  tags_url: 'https://api.github.com/repos/midudev/midu.dev/tags',
  blobs_url: 'https://api.github.com/repos/midudev/midu.dev/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/midudev/midu.dev/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/midudev/midu.dev/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/midudev/midu.dev/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/midudev/midu.dev/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/midudev/midu.dev/languages',
  stargazers_url: 'https://api.github.com/repos/midudev/midu.dev/stargazers',
  contributors_url:
    'https://api.github.com/repos/midudev/midu.dev/contributors',
  subscribers_url: 'https://api.github.com/repos/midudev/midu.dev/subscribers',
  subscription_url:
    'https://api.github.com/repos/midudev/midu.dev/subscription',
  commits_url: 'https://api.github.com/repos/midudev/midu.dev/commits{/sha}',
  git_commits_url:
    'https://api.github.com/repos/midudev/midu.dev/git/commits{/sha}',
  comments_url:
    'https://api.github.com/repos/midudev/midu.dev/comments{/number}',
  issue_comment_url:
    'https://api.github.com/repos/midudev/midu.dev/issues/comments{/number}',
  contents_url:
    'https://api.github.com/repos/midudev/midu.dev/contents/{+path}',
  compare_url:
    'https://api.github.com/repos/midudev/midu.dev/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/midudev/midu.dev/merges',
  archive_url:
    'https://api.github.com/repos/midudev/midu.dev/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/midudev/midu.dev/downloads',
  issues_url: 'https://api.github.com/repos/midudev/midu.dev/issues{/number}',
  pulls_url: 'https://api.github.com/repos/midudev/midu.dev/pulls{/number}',
  milestones_url:
    'https://api.github.com/repos/midudev/midu.dev/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/midudev/midu.dev/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/midudev/midu.dev/labels{/name}',
  releases_url: 'https://api.github.com/repos/midudev/midu.dev/releases{/id}',
  deployments_url: 'https://api.github.com/repos/midudev/midu.dev/deployments',
  created_at: '2018-11-20T21:29:52Z',
  updated_at: '2022-01-22T21:11:15Z',
  pushed_at: '2022-01-22T07:02:23Z',
  git_url: 'git://github.com/midudev/midu.dev.git',
  ssh_url: 'git@github.com:midudev/midu.dev.git',
  clone_url: 'https://github.com/midudev/midu.dev.git',
  svn_url: 'https://github.com/midudev/midu.dev',
  homepage: 'https://midu.dev',
  size: 36688,
  stargazers_count: 93,
  watchers_count: 93,
  language: 'html',
  has_issues: true,
  has_projects: false,
  has_downloads: true,
  has_wiki: false,
  has_pages: false,
  forks_count: 79,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 5,
  license: {
    key: 'gpl-3.0',
    name: 'GNU General Public License v3.0',
    spdx_id: 'GPL-3.0',
    url: 'https://api.github.com/licenses/gpl-3.0',
    node_id: 'MDc6TGljZW5zZTk='
  },
  allow_forking: true,
  is_template: false,
  topics: [
    'blog',
    'frontend',
    'frontend-articles',
    'frontend-web',
    'hacktoberfest'
  ],
  visibility: 'public',
  forks: 79,
  open_issues: 5,
  watchers: 93,
  default_branch: 'master'
}

describe('Render RepositoryItem', () => {
  it('should render RepositoryItem', () => {
    const { container } = render(<RepositoryItem repository={repositoryMock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
