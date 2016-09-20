class Api::V1::MenuItemsController < Api::V1::BaseController
  def index
    respond_with MenuCategory.find(params[:menu_category_id]).menu_items.to_json
  end

  def create
    respond_with :api, :v1, MenuCategory.find(params[:menu_category_id]), MenuItem.create(menu_item_params)
  end

  def destroy
    respond_with MenuItem.destroy(params[:id])
  end

  def update
    menu_item = MenuItem.find(params["id"])
    menu_item.update_attributes(menu_item_params)
    respond_with menu_item, json: menu_item
  end

  private

  def menu_item_params
    params.require(:menu_item).permit(:name, :price, :menu_category_id)
  end
end
