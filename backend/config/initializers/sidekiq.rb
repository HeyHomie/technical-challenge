# frozen_string_literal: true

redis_config = YAML.safe_load(
  ERB.new(File.read(Rails.root.join('config/redis.yml'))).result
)['development']
redis_config.symbolize_keys!

Sidekiq.configure_server do |config|
  config.redis = { url: "redis://#{redis_config[:host]}:#{redis_config[:port]}" }
end

Sidekiq.configure_client do |config|
  config.redis = { url: "redis://#{redis_config[:host]}:#{redis_config[:port]}" }
end
