class CvsController < ApplicationController
  before_action :authenticate_user!
  # def show_with_serializer
  #   @cv = Cv.where(user_id: params[:user_id], cv_id: params[:cv_id])
  #   options = {
  #     include: [:summaries]
  #   }
  #   render json: CvSerializer.new(@cv, options).serializable_hash[:data], status: :ok
  # end

  def index
    @cv = Cv.all
    render json: CvSerializer.new(@cv).serializable_hash[:data][:attributes], status: :ok
  end

  def show
    @user_cv = Cv.where(id: params[:cv_id], user_id: params[:user_id])
    render json: @user_cv, include: %i[summaries experiences]
  end

  def list
    @user_cvs = Cv.where(user_id: params[:user_id])
    render json: @user_cvs, include: [:summaries, :experiences, { experiences: { include: :experience_type } }]
  end
end
