class UsersController < ApplicationController
    skip_before_action :confirm_authentication

  def index
    users = User.all 
    render json: users
  end
end
