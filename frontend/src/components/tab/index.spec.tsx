import { Tab } from '.';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const props = {
    repos_count: '10'
}

test('Charts / should render just a single canvas successfully ', () => {
    const { container } = render(
        <BrowserRouter>
            <Tab repos_count={props.repos_count} />
        </BrowserRouter>
    );
    expect(
        parseInt(container.getElementsByClassName('count')[0].innerHTML)
    ).toBe(parseInt(props.repos_count));
});