# frozen_string_literal: true

require 'rails_helper'

describe Repo, type: :model do
  context '.search' do
    it 'should have a search method' do
      expect(Repo).to respond_to(:search)
    end
  end
end
