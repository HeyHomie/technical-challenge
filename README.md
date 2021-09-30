# Backend

---

This is a simple rails API implementation. It has 2 simple models and serves a single endpoint
which uses graphQL to query the data.

## Running the automaton

---

Running the project:

To run the backend of this challenge:

```
bundle install
```

```
rake db:create ||
bundle exec rails db:create
```

```
rake db:migrate ||
bundle exec rails db:migrate
```

```
rails s ||
bundle exec rails server
```

This will run the server on port 3000 you can view the models and test mutations and queries by
navigating to http://localhost:3000/graphiql

---

### Features:

- [x] GraphQL
- [x] GraphIQL for graphical testing
- [ ] Simple CRUD (You can only CR updates and deletes are not implemented since they are not used)
- [x] PostgreSQL
- [x] Simple many-to-one relationships
- [x] Import data from an external API
- [x] Compact code (query, mutation, models, types, resolvers, etc)
- [ ] N+1 (Search is managed by queries and the implementation on the front end does not generate N+1 queries but instead uses the cache, however the backend is not optimized to prevent N+1 )
- [ ] Integration Test
- [ ] Basic endpoint security (since all validations are ran by graphQL the basic security is there and my resolvers are not (I hope) vulnerable to SQL injection) But other than that there is no Origin validation and the API is exposed

# Frontend

---

This is a simple react App implementation. It connects to a graphql server and manages user and repository data.

## Running the Frontend

---

Running the project:

To run the frontend of this challenge:

```
yarn install
```

```
yarn start
```

This will run the server on port 3001 you will start with an empty database. But you can add some data in the app.

---

You can also run some basic test using the following command:

```
yarn test
```

### Features:

- [x] GraphQL
- [x] Custom Hooks
- [x] Tailwind
- [x] Custom Routing Implementation
- [x] Caching (React query cache)
- [x] Basic Layout
- [x] Custom Design
- [x] Home page to import Github Users and Repositories
- [x] Compact code (reusable components, small functions etc.)
- [x] User page to see all repositories
- [x] Filter via backend for repositories (Search mutation)
- [x] Animations
- [x] Basic Repo info Card
- [x] Suspense / Loader
- [x] Basic Tests with Jest (Snapshot Tests)

## How to add a user?

After navigating to http://localhost:3001 simply type your username (or anyone) and click Import User and click the button or press Enter.

You can add as many users as you want.

## How to find a repository?

Click on any user on the home page to see his/her repositories, you can use the searchbox to filter them (This actually send a mutation to the database)
