# Homiengineering Challenge - Backend Challenge
This is the backen for the Homiengineering Challenge. The challenge consists in implement a basic catalog for a github user's repository.
It has to import all repositories for a given user to the database, and then provide a REST API to retrieve the information.

# Used Stack:
- Ruby on Rails
- PostgreSQL
- Searchkick with OpenSearch

# Implemented Features
- Repositories and User data stored on the database
- Search feature for repositories
- Unit tests
- Integrations tests
- Basic endpoint security
- Github API Client
- Integration with Searchkick
- Handling erros
- Synchronization of API

# Setup
- clone the repository
- install Postgres
- install OpenSearch
- create file config/application.yml with a existing GITHUB_TOKEN (Optional)
- run `yarn install` on root directory
- run `bundle install` on backend directory
- run `bundle exec rails db:create` on backend directory
- run `bundle exec rails db:migrate` on backend directory
- run `bundle exec rails db:seed` on backend directory
- run `bundle exec rails server` on backend directory
- run `buendle exec rspec` on backend directory to run tests

# Examples to run with curl
run on backend directory

Get a user:
```
curl -X GET -H "Authorization: Basic ZHVtbXlAdGVzdC5jb206c3VwZXJfcGFzc3dvcmQ=" \
http://localhost:3000/api/v1/users/?username=HeyHomie
```

Get the list of repositories for a given user:
```
curl -X GET -H "Authorization: Basic ZHVtbXlAdGVzdC5jb206c3VwZXJfcGFzc3dvcmQ=" \
http://localhost:3000/api/v1/repositories/?username=HeyHomie
```

Search a repository in for a given user:
```
curl -X GET -H "Authorization: Basic ZHVtbXlAdGVzdC5jb206c3VwZXJfcGFzc3dvcmQ=" \
http://127.0.0.1:3000/api/v1/repositories/?username=HeyHomie&filter=challenge
```