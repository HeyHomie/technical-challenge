# technical-challenge

this technical challenge is a challenge to get data from github api, put the data inside our database and deliver the information to the user

## Dependencies neccesaries 

you need to have:

- ruby 3.0.1
- rails ~> 6.1
- postgres installed or docker instance

nice to have:
- rbenv or rvm

dependencies used: 
- rswag
- FactoryBot
- rspec
- Faker

# Installation

## Dependencies installation

first step its neccesary run bundle install to install all neccesaries gems
```bash
bundle install
```
second step run rake db:create to create database 
```bash
rake db:create
```

third step run rake db:migrate to generate database migrations  
```bash
rake db:migrate
```

also is neccessary create file in /config path named application.yml and add 2 variables:

- GITHUB_TOKEN
- HOST 

after you added this you can run rake rswag:specs:swaggerize
```bash
rake rswag:specs:swaggerize
```
this replace swagger.yaml under swagger/v1 with your current Host 


## How run project? 

in backend path run rails s command 
```bash
rails s
```

# Usage

## with curl or postman

we have 3 endpoints if you want get info  github_user
its neccesary you generate an api request with some client like postman or curl 
the paths for this endpoints are in basepath Host/api/v1: 

- get basepath/Users/:login
- get basepath/users/:login_user/repositories
- get basepath/users/:login_user/repositories/:name

replace :login_user with the github username do you want to find

replace :name with the repository name do you want to find

## with rswag

you can use our rswag documentation accesing the following path in your web browser

- host/api-docs


## rspec test

how run test
```
rspec spec
```

## License
[MIT](https://choosealicense.com/licenses/mit/)