# Technical-challenge

This repository is a challenge from the HeyHomie company called a technical challenge. This challenge consists of demonstrating your knowledge as a backend in the Ruby on Rails framework and its communication with the GitHub public API.

## Pre-information 📢

You can read swagger yamls, look for it in backend/suagger/api/v1/swagger.yaml

## Pre-requirements 📋

**Main:**
* ruby 3.0.1
* rails 6.1
* postgres

**Nice to have:**
* rbenv or rvm

**Dependencies used to test:**
* FactoryBot
* rspec
* Faker

### Installation 🔧

**Get repo the Git**

```bash
git clone git@github.com:Serlle/technical-challenge.git
```

```bash
cd path project
```

**Run on backend directory**

```bash
bundle install
```

**Data Base**

For create and migrate the db, run:

```bash
bundle exec rails db:create db:migrate
```

## Running the tests ⚙️

The tests are designed for 3 users: "Serlle", "HeyHomie" and "yknx4", if you don't have these users, the test will fail

### Test end-to-end 🔩

There are 2 parts in which the tests are done, which you can run:

**Models**

```bash
bundle exec rspec ./spec/models/user_spec.rb
```

```bash
bundle exec rspec ./spec/models/repository_spec.rb
```

**Requests**

```bash
bundle exec rspec ./spec/requests/api/v1/users_spec.rb
```

```bash
bundle exec rspec ./spec/requests/api/v1/repositories_spec.rb
```

**All the test**

```bash
bundle exec rspec spec
```

## Project 📦

**Server**

In backend path run:

```bash
 bundle exec rails server
```

**Paths**

*Note: You can use any tool for do requests HTTP*

If you want show info of a user:

`host/api/v1/users/:id`

:id = User name (require).

If you want an index of a user's repositories:

`host/api/v1/users/:user_id/repositories`

:user_id = User name (require).

***Note: This path will give you only the repos public and an index of 10 in 10 for paging, which will be explained later.***

**Params**

If you user has more the 10 repos and you want to see the other repos, you need to indicate the index page:

`host/api/v1/users/:user_id/repositories?page=PageNumber`

If you want to find a repository for a user:

`host/api/v1/users/:user_id/repositories?search=RepoName`

You can also find a repository with half of its name. Example:

`host/api/v1/users/serlle/repositories?search=technical-challenge`

to:

`host/api/v1/users/serlle/repositories?search=technical`

## Extra information 🗂

This challenge contains an application.yml file, which is to put the token of a specific GitHub user. This file is not being used in the backend of the project, as the Github public API was taken to be able to lookup any user and not just get a specific one.

For more information 📌

* About user [Github User API](https://docs.github.com/en/rest/reference/users#get-a-user)
* About repos [Github Repos API](https://docs.github.com/en/rest/reference/repos#list-organization-repositories)

## Built with 🛠️

* [Ruby](https://www.ruby-lang.org/es/)
* [Ruby on Rails](https://rubyonrails.org/)
* [Postman](https://www.postman.com/)

## More information about challenge 🖇️

Go to [HeyHomie - technical-challenge](https://github.com/HeyHomie/technical-challenge) for details of our code.

## Author ✒️

* **Serlle Rosales** - *Initial Work* - [Serlle](https://github.com/Serlle)

## License 📄

This project is open to the public. 🎁