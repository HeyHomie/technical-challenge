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
