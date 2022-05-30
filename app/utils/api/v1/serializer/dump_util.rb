# frozen_string_literal: true

module Api
  module V1
    module Serializer
      class DumpUtil < ApplicationSerializerUtil
        def initialize(params)
          super()

          @params = params
        end

        def call
          response(success: true, payload: handler.dump(params[:value]))
        rescue
          response(error: StandardError.new(self))
        end

        private

        attr_reader :params
      end
    end
  end
end