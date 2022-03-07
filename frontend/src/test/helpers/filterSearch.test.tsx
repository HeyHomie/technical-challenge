import { filterSearch } from '../../helpers/filterSearch'

describe('Testing filterSearch helper', () => {
  test('should return a repo search', () => {
    const respos = [
      { id: 1, node_id: '123', full_name: 'First repo', private: false },
      { id: 2, node_id: '124', full_name: 'Second repo', private: false },
      { id: 3, node_id: '125', full_name: 'Third repo', private: false }
    ]
    const search = 'second'
    const newArray = filterSearch(respos, search)
    expect(newArray[0].id).toBe(2)
  })
})
