class SocialController < ApplicationController

  def show
    user = current_user
    if user.social
      render json: user.social
    else
      render json: Social.new
    end
  end

  def custom_show
    user = User.find_by(id: params[:id])
    render json: user.social
  end

  def add
    current_user.social.update(param)
    render json: current_user.social
  end

  private
  def param
    params.require(:social).permit(:facebook, :instagram, :discord, :phone_number)
  end

end
