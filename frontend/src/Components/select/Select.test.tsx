
import renderer from 'react-test-renderer';
import Select from './Select';

it('renders Select correctly', () => {
  const tree = renderer.create( <Select setValueSelect={()=>{}}  defaultValue={''}  options={[]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});