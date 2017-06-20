class Api::V1::RestaurantsController < ApplicationController

  def index
    restaurants = Restaurant.all
    render json: restaurants, status: 200
  end

  def show
  end

end
