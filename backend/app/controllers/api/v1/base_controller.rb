# frozen_string_literal: true

# Holds all the common methods used across the API
class Api::V1::BaseController < ApplicationController
  def response_error(args = {})
    opts = { code: 420 }.merge(args)
    opts[:message] ||= t("api.http_response.errors.error_#{opts[:code]}")

    render status: opts[:code], json: {
      error: opts[:message]
    }
  end
end
