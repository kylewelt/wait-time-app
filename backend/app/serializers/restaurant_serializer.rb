class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :address, :locality, :city, :zipcode, :average_cost_for_two, :thumb, :user_rating
end
