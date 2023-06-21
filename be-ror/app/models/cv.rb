class Cv < ApplicationRecord
  belongs_to :user
  has_many :summary_by_cvs
  has_many :summaries, through: :summary_by_cvs
  has_many :experience_by_cvs
  has_many :experiences, through: :experience_by_cvs
end
