# frozen_string_literal: true

class ResponseService
  attr_reader :status, :body

  def initialize(status, body)
    @status = status
    @body = body
  end

  def call
    OpenStruct.new(status: status, body: body)
  end
end
