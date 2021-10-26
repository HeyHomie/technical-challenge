# frozen_string_literal: true

class ApplicationController < ActionController::API
  include Pagy::Backend

  rescue_from ArgumentError, with: :unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
  rescue_from Pagy::OverflowError, with: :pagination_errors
  rescue_from Pagy::VariableError, with: :pagination_errors

  after_action { pagy_headers_merge(@pagy) if @pagy }

  private

  def pagination_errors(exception)
    render json: {
      errors: [attribute: 'pagination', messages: [description: exception.message]]
    }, status: :unprocessable_entity
  end

  def unprocessable_entity
    render :nothing, status: __method__
  end

  def not_found
    api_messages = api_messages(error_message_not_found(model.underscore))
    render json: { errors: api_messages }, status: :not_found
  end

  def model
    controller_name.singularize.camelize
  end

  def error_message_not_found(class_name)
    { class_name.to_sym => [I18n.t('errors.models.not_found', class_name: class_name)] }
  end

  def api_messages(messages)
    messages.map do |attribute, error_description|
      message = { attribute: attribute.to_s, messages: [] }

      error_description.each_with_index do |description, index|
        code = details[attribute][index][:error].to_s if respond_to?(:details)
        message[:messages] << { code: code, description: description }
      end

      message
    end
  end
end
