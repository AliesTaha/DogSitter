class ApplicationController < ActionController::API
  include ActionController::Helpers
  helper_method :current_user, :logged_in?
  before_action :authorized
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  def current_user
    if session[:user_id]
      user = User.find(session[:user_id])
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized
    render status: :unauthorized, json: { error: "Not authorized" } unless logged_in?
  end

end
