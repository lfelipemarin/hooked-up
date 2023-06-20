class Cv < ApplicationRecord
  belongs_to :user
  has_many :summary_by_cvs
  has_many :summaries, through: :summary_by_cvs
end
