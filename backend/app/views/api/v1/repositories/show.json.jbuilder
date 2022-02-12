# frozen_string_literal: true

json.repository do
  json.id @repository.id
  json.github_id @repository.github_id
  json.name @repository.name
  json.full_name @repository.full_name
  json.forks @repository.forks
  json.open_issues @repository.open_issues
end
