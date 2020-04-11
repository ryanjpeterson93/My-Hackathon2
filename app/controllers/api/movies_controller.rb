class Api::MoviesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_movies, only: [:show, :update, :destroy]

  def all_movies
    render json: Movies.all
  end

  def index
    render json: current_user.movies
  end

  def show
    render json: @movies
  end

  def create
    render json: current_user.movies.create(movie_params)
  end

  def update
    @movie.update_attributes(movie_params)
    render json: @movie
  end

  def destroy
    @movie.destroy
  end

  private 

  def set_movies
    @movie = current_user.movies.find(params[:id])
  end

  def movie_params
      params.require(:movie).permit(:summary, :genre, :run_time, :rating)
  end
end