class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :address, :locality, :city, :zipcode, :average_cost_for_two, :thumb, :image, :user_rating
  has_many :submissions, serializer: SubmissionSerializer
end
