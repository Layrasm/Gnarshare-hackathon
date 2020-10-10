class Api::CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post, only: [:index, :show, :new, :create, :destroy]
  before_action :set_comment, only: [:show,:edit, :update, :destroy]


def index
  render json: @post.comments
end

def create
  comment = @post.comments.new(comment_params)
  if comment.save
    render json: comment
  else
    render json: {errors: comment.errors}, status:420
  end
end

def destroy
  Comment.find(params[:id]).destroy
    render json: {message: "Comment Deleted"}
end


private
  def set_post
    @post = Post.find(params[:post_id])
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:name, :body, :trip_type, :res_spots, :pickup_spot, :rider_level, :rider_type)
  end

end
