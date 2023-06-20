class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :email, :address, :phone_number, :cellphone_number
  has_many :cvs
end
