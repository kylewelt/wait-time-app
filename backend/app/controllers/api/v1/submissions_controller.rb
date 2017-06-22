class Api::V1::SubmissionsController < ApplicationController

  def create
    submission = Submission.new(submission_params)
    submission.restaurant = Restaurant.find(submission.restaurant_id)
    submission.save
    render json: submission, status: 201
  end

  private

  def submission_params
    params.require(:submission).permit(:id, :wait_time, :meal_time, :day, :time, :rating, :comments, :restaurant_id)
  end

end
