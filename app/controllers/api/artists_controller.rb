class Api::ArtistsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_artists, only: [:show, :update, :destroy]


  def all_artists
    render json: Artist.all
  end

  def index
    render json: current_user.artists
  end

  def show
    render json: @artists
  end

  def create
    render json: current_user.artists.create(artist_params)
  end

  def update
    @artist.update_attributes(artist_params)
    render json: @artist
  end

  def destroy
    @artist.destroy
  end

  private 

  def set_artists
    @artist = current_user.artists.find(params[:id])
  end

  def artist_params
    params.require(:artist).permit(:albums, :genre)
  end 

end
