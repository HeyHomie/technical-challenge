import { Repo } from '.';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const props = {
    repo: {
        name: 'Repo 1',
        html_url: 'https://repourl.com',
        private: false,
        language: 'Ruby',
        updated_at: '07-11-2021 15:45:00'
    }
}

test('Charts / should render just a single canvas successfully ', () => {
    const { container } = render(
        <BrowserRouter>
            <Repo repo={props.repo} />
        </BrowserRouter>
    );

    expect(
        container.getElementsByClassName('repo-type')[0].innerHTML
    ).toBe(props.repo.private ? 'private' : 'public');

    expect(
        container.getElementsByClassName('repo-name')[0].outerHTML.includes(props.repo.name)
    ).toBe(true);
});