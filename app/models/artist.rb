class Artist < ApplicationRecord
  belongs_to :user

  serialize :albums, Array
end
