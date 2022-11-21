class UsersController < ApplicationController
    skip_before_action :confirm_authentication

  def index
    users = User.all 
    render json: users
  end

  def show
    if current_user
      render json: current_user, status: :ok
    else
      render json: { user: 'not logged in' }, status: :unauthorized
    end
  end

  def create 
    user = User.create(username: params[:username], password:params[:password])
    render json: user
  end

end
