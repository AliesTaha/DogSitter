class UserController < ApplicationController
  skip_before_action :authorized , only: [:create]
  wrap_parameters :user, include: [:username, :email, :password, :password_confirmation,  :address, :is_owner]


  def new
    user = User.new
  end

  def create
    user = User.new(param)
    if user.valid?
      user.save
      render json: user
    else
      render json: "{'messages' : '#{user.errors.full_messages}'}"
    end
  end

  def all_show
    user = User.all
    render json: {users: user.map { |d| d
         ok = d.to_json
         hash = JSON.parse(ok)
         if d.photo.present?
          img = polymorphic_url(d.photo)
          hash[:image] = img
          hash[:password_digest]
          hash
         else
          hash[:image] = ""
          hash[:password_digest]
          hash
      end
      }}
  end

  def show
    if logged_in?
      if current_user.photo.present?
        img = polymorphic_url(current_user.photo)
      else
        img = ""
      end
      render json: {user: current_user,images: img , pets: current_user.pets , socials: current_user.social }
    else
      render status: :unauthorized, json: { error: "Not authorized" }
    end
  end

  def profile_id
    user =  User.where(id: params[:id])
    render json: user
  end

  def edit
      user = current_user
      if user.authenticate(params[:old_password])
        user.update(edit_parm)
        render json: user
      else
        render status: :unauthorized, json: { error: "Password incorrect" }
    end
  end

  private
  def param

    params.require(:user).permit( :email, :password, :password_confirmation, :instagram,   :address, :is_owner, :photo, :firstname, :lastname, :bio )
  end

  def edit_parm
     params.require(:user).permit(:email, :address, :old_password, :password, :instagram, :photo, :bio, :firstname, :lastname)
  end

  def authorized
    render status: :unauthorized, json: { error: "Not authorized" } unless logged_in?
  end
end
