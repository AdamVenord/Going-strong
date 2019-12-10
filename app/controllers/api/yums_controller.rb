class Api::YumsController < ApplicationController
  def index
    render json: Yum.all
  end

  def create
    yum = Yum.new(Yum_params)
    if yum.save
      render json: yum
    else
      render json: { errors: yum.errors }, status: :unprocessable_entity 
    end
  end

  def update
    yum = Yum.find(params[:id])
    yum.update(complete: !yum.complete)
    render json: yum
  end

  def destroy
    Yum.find(params[:id]).destroy
    render json: { message: 'Yum Yum deleted UwU' }
  end

  private

  def yum_params
    params.require(:yum).permit(:name, :complete)
  end
end
