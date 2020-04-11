require 'test_helper'

class Api::ArtistsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_artists_index_url
    assert_response :success
  end

  test "should get show" do
    get api_artists_show_url
    assert_response :success
  end

  test "should get new" do
    get api_artists_new_url
    assert_response :success
  end

end
