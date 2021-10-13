import renderer from 'react-test-renderer';
import Pagination from './Pagination';


it('render Pagination correctly', () => {
  const tree = renderer.create(<Pagination
  currentPage={0}
  totalPage={0}
  setCurrentPage={()=>{}}
  
  />).toJSON();
  expect(tree).toMatchSnapshot();
});