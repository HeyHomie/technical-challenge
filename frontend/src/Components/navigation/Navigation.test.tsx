import renderer from 'react-test-renderer';
import Navigation from './Navigation';


it('render Navigation correctly', () => {
  const tree = renderer.create(<Navigation total_repositories={0}/>).toJSON();
  expect(tree).toMatchSnapshot();
});