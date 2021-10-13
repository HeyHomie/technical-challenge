import renderer from 'react-test-renderer';
import Footer from './Footer';


it('render Footer correctly', () => {
  const tree = renderer.create(<Footer/>).toJSON();
  expect(tree).toMatchSnapshot();
});