class CreateMenuItems < ActiveRecord::Migration[5.0]
  def change
    create_table :menu_items do |t|
      t.string :name
      t.decimal :price, precision: 5, scale: 2
      t.references :menu_category, foreign_key: true

      t.timestamps
    end
  end
end
