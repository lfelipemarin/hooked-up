class Experience < ApplicationRecord
  belongs_to :experience_type
  has_many :experience_by_cvs
  has_many :cvs, through: :experience_by_cvs
end
