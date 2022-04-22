import { Link } from 'react-router-dom';
import './../../index.css'

export function About() {
    return (
        <div className='App'>
            <div style={{ margin: 'auto', width: '75%'}}>
                <h1>About Page</h1>

                I upload in this single commits all changes; but, How would my commits be?
                <ol>1) Migration removing jsonb field for repositories in users table</ol>
                <ol>2) Tests for models, after that you can improve severals db's features, example an index for name github_id email (This will add speed and restrictions)</ol>
                <ol>3) Change to services for users an repos creation and listing, with theirs tests</ol>
                <ol>4) A background job for repos saving with sidekiq and ActiveJob (this is great for an user with 1000 repos)</ol>
                <ol>5) A search with elasticsearch and searchkick</ol>
                <ol>6) Migration for aditional data</ol>
                <ol>7) Front-end Job (My focus is on back-end), but I have experience and I added a litle bit</ol>

                <Link to="/user/yknx4" >Home</Link>
            </div>
        </div>
    )
}