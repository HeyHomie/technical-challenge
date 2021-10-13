import renderer from 'react-test-renderer';
import Loading from './Loading';


it('render Loading correctly', () => {
  const tree = renderer.create(<Loading/>).toJSON();
  expect(tree).toMatchSnapshot();
});