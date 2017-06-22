class SubmissionSerializer < ActiveModel::Serializer
  attributes :id, :wait_time, :meal_time, :day, :time, :rating, :comments, :restaurant_id
  belongs_to :restaurant, serializer: RestaurantSerializer
end
