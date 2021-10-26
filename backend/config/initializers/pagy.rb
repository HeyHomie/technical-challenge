# frozen_string_literal: true

require 'pagy/extras/headers'
require 'pagy/extras/items'

Pagy::VARS[:page_param] = :page
Pagy::VARS[:headers] = { page: 'Current-Page', items: 'Page-Items', count: 'Total-Count', pages: 'Total-Pages' }
Pagy::VARS[:items_param] = :items
Pagy::VARS[:max_items]   = ENV['MAX_ITEMS_PAGINATION'].to_i
