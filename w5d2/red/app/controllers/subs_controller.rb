class SubsController < ApplicationController

  before_action :require_login, except: [:index, :show]
  before_action :require_user_own_sub, only: [:edit, :update]

  def require_mod_login
    redirect_to new_session_url unless @sub.moderator == current_user
  end

  def new
    @sub = Sub.new
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.moderator_id = current_user.id

    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def index
    @subs = Sub.all
  end

  def edit
    @sub = Sub.find(params[:id])
    require_mod_login
  end

  def show
    @sub = Sub.find(params[:id])
  end

  def update
    @sub = Sub.find(params[:id])


    if @sub.update_attributes(sub_params)
      redirect_to sub_url
    else
      flash[:error] = @sub.errors.full_messages
      render :edit
    end
  end

  private

  def sub_params
    params.require(:sub).permit(:title, :description)
  end

  def require_user_own_sub
    return if current_user.subs.find_by(id: params[:id])
    render json: 'Forbidden', status: :forbidden
  end

end
