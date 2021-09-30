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
rake db:create
```

```
rake db:migrate
```

```
rails s
```

This will run the server on port 3000 you can view the models and test mutations and queries by
navigating to http://localhost:3000/graphiql

---

### Features:

- [x] GraphQL
- [x] GraphiQL for graphical testing
- [ ] Simple CRUD (You can only CR updates and deletes are not implemented since they are not used)
- [x] PostgreSQL
- [x] Simple many-to-one relationships
- [x] Import data from an external API
- [x] Compact code (query, mutation, models, types, resolvers, etc)
- [ ] N+1 (Search is managed by queries and the implementation on the front end does not generate N+1 queries but instead uses the cache, however the backend is not optimized to prevent N+1 )
- [ ] Integration Test
- [ ] Basic endpoint security (since all validations are ran by graphQL the basic security is there and my resolvers are not (I hope) vulnerable to SQL injection) But other than that there is no Origin validation and the API is exposed
