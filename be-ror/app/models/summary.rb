class Summary < ApplicationRecord
  has_many :summary_by_cvs
  has_many :cvs, through: :summary_by_cvs
end
