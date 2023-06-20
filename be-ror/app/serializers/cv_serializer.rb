class CvSerializer
  include JSONAPI::Serializer
  attributes :id, :user_id
  belongs_to :user
  has_many :summaries
end
