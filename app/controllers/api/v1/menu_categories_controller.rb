class Api::V1::MenuCategoriesController < Api::V1::BaseController
  def index
    @menu_categories = MenuCategory.all
    respond_with @menu_categories.to_json(:include => :menu_items)
  end

  def create
    respond_with :api, :v1, MenuCategory.create(menu_category_params)
  end

  def destroy
    respond_with MenuCategory.destroy(params[:id])
  end

  def update
    menu_category = MenuCategory.find(params["id"])
    menu_category.update_attributes(menu_category_params)
    respond_with menu_category, json: menu_category
  end

  private

  def item_params
    params.require(:menu_category).permit(:id, :name)
  end
end
