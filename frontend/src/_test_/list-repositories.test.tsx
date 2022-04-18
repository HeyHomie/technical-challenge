import { render, screen } from '../setupTests'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { CardInfoRepositor } from '../components/molecules/cards/index'

describe('Get Repositories', () => {
  const axiosMock = new MockAdapter(axios)
  const username = 'yknx4'

  axiosMock
    .onGet(`https://api.github.com/users/${username}/repos`)
    .reply(function (config) {
      return [200, { repos: [{ id: 59423583, name: '163-music-unlock' }] }]
    })

  it('show repo', () => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(function (response) {
        const nameRepo = response.data.repos[0].name
        render(<CardInfoRepositor />)
        expect(screen.getAllByText(nameRepo)).toBeInTheDocument()
      })
      .catch((error) => {
        console.log(error)
      })
  })
})
