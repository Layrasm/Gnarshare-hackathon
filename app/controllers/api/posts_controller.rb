class Api::PostsController < ApplicationController
  before_action :authenticate_user! 
  before_action :set_user, only: [:show]


  def index
    render json: @current_user.posts
  end
  
  def create
    post = current_user.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: {errors: post.errors}, status:420
    end
  end

  def show
  end

  def update
  end

  def edit
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def post_params
    params.require(:post).permit(:name, :body, :avaliable_spots, :departure_location, :resort, :ride_type, :rider_level, :departure_time, :car_type)
  end
end



