# frozen_string_literal: true

module FaradayConnection
  extend ActiveSupport::Concern

  def connect
    Faraday.new do |f|
      f.request :authorization, 'Bearer', Figaro.env.GITHUB_TOKEN
      f.request :json # encode req bodies as JSON
      f.request :retry # retry transient failures
      f.response :follow_redirects # follow redirects
      f.response :json # decode response bodies as JSON
    end
  end
end
