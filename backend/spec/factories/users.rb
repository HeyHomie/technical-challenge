# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    login { 'HeyHomie' }
    id { '123587' }
    url { 'http://github.com/HeyHomie' }
    name { 'HeyHomie' }
    email { 'HeyHomie@gmail.com' }
    avatar_url { 'https://avatars.githubusercontent.com/u/47169514?v=4' }
    repositories {
      { "id":355054237,"url":"https://api.github.com/repos/HeyHomie/adamalston","fork":true,"name":"adamalston","size":49588 }
    }
  end
end
