class Api::BooksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_books, only: [:show, :update, :destroy]

  def all_books
    render json: Book.all
  end

  def index
    render json: current_user.books
  end

  def show
    render json: @books
  end

  def create
    render json: current_user.books.create(book_params)
  end

  def update
    @book.update_attributes(book_params)
    render json: @book
  end

  def destroy
    @book.destroy
  end

  private 

  def set_books
    @book = current_user.books.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author, :summary, :genre)
  end

end