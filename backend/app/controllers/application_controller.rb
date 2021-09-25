# frozen_string_literal: true

class ApplicationController < ActionController::API
  def create_faraday_connection
    Faraday.new do |f|
      f.request :authorization, 'Bearer', Figaro.env.GITHUB_TOKEN
      f.request :json # encode req bodies as JSON
      f.request :retry # retry transient failures
      f.response :follow_redirects # follow redirects
      f.response :json # decode response bodies as JSON
    end
  end

  def paginate (item_name, item, page)
    per_page = 5
    count = item.count
    items_paginated = Kaminari.paginate_array(item).page(page).per(per_page)

    return {
      "#{item_name}": items_paginated,
      page: page.to_i,
      per_page: per_page,
      total_count: count,
      total_pages: (count / per_page.to_f).ceil
    }
  end
end
