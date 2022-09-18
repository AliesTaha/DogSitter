class SessionController < ApplicationController

  skip_before_action :authorized , only: [:create]
  def create
      user = User.find_by(email: params[:email])
      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        render json: {message: "Login Successfull"}
      else
        render status: :unauthorized, json: { error: "Login Unsuccessfull" }
      end
  end

  def destroy
    session[:user_id] = nil
    render json: '{"message": "Logout successfully"}'
  end
end
