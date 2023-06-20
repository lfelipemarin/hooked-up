class CurrentUserController < ApplicationController
  before_action :authenticate_user!
  # def index_with_serializer
  #   render json: UserSerializer.new(current_user).serializable_hash[:data][:attributes], status: :ok
  # end

  # def show_with_serializer
  #   options = {
  #     include: [:cvs]
  #   }
  #   render json: UserSerializer.new(current_user, options).serializable_hash, status: :ok
  # end

  def index
    render json: current_user, except: %i[jti created_at updated_at]
  end

  def show
    @user = User.find(params[:user_id])
    render json: @user, except: %i[jti created_at updated_at]
  end
end
