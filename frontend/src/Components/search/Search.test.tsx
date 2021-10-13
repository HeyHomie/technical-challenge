import renderer from 'react-test-renderer';
import Search from './Search';

it('render Search correctly', () => {
  const tree = renderer.create(<Search setValueSearch={()=>{}} valueSearch={''} />).toJSON();
  expect(tree).toMatchSnapshot();
});