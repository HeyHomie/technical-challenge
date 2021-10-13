import renderer from 'react-test-renderer';
import Repositories from './Repositories';


it('render Repositories correctly', () => {
  const tree = renderer.create(<Repositories repositories={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});