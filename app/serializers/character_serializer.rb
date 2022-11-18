class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :savepoint, :defense, :strength, :health, :intelligence
  has_one :user
end
