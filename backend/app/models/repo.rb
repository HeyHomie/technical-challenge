# frozen_string_literal: true

class Repo < ApplicationRecord
  searchkick

  belongs_to :user
end
