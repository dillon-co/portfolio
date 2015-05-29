require 'test_helper'

class ProjectsControllerTest < ActionController::TestCase
  test "should get gol" do
    get :gol
    assert_response :success
  end

  test "should get ezbeats" do
    get :ezbeats
    assert_response :success
  end

  test "should get dice" do
    get :dice
    assert_response :success
  end

end
