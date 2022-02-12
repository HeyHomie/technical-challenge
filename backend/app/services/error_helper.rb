# frozen_string_literal: true

# Base class to print errors in a service
module ErrorHelper
  def resolution(status, error_message = nil, object = nil)
    message = errors.fetch(error_message, nil)
    OpenStruct.new(success?: status, error_message: message, object: object)
  end

  def errors
    { default: nil }
  end
end
