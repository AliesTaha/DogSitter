class PetsController < ApplicationController

  def private_show
    user = current_user
    render json: {
      data:user.pets.map{ |d| d }, message:"success"
   }, status: :ok
  end

  def show
    user = current_user
    render json: user.pets.where(id: params[:id])
  end

  def public_show
    pets = Pet.all
    render json: pets.map { |category|
      category.as_json.merge({ image: url_for(category.image) })
    }
  end

  def add
    pets = Pet.new(param)
    user = current_user
    if user.pets << pets
      render json: { message: "Pets Added Successfully"}
    else
      render status: :unauthorized, json: { error: "Error while adding pets" }
    end
  end

  def update
      current_user.pets.where(id: params[:id]).update(param)
      render json: { message: "Pets Updated Successfully"}
  end

  def custom_breed
    pets = Pet.all
    render json: {
      data:pets.map{ |d| d }, message:"success"
   }, status: :ok
  end

  def destroy
    pets = user.pets.where(id: params[:id])
    pets.destroy
    render json: {message: "Deleted Successfully" }
  end


  private
  def param
    params.require(:pet).permit(:name, :description, :breed , :age, :image)
  end
end
