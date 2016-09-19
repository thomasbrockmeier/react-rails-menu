# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


categories = ['Hot Drinks', 'Cold Drinks', 'Bagels', 'Sweets']

categories.each { |c| MenuCategory.create(name: c) }


MenuItem.create(
  name: 'Espresso',
  price: 2.20,
  menu_category: MenuCategory.find_by(name: 'Hot Drinks')
)

MenuItem.create(
  name: 'Cappuccino',
  price: 2.75,
  menu_category: MenuCategory.find_by(name: 'Hot Drinks')
)

MenuItem.create(
  name: 'Green Tea',
  price: 2.00,
  menu_category: MenuCategory.find_by(name: 'Hot Drinks')
)


MenuItem.create(
  name: 'Coca Cola',
  price: 2.00,
  menu_category: MenuCategory.find_by(name: 'Cold Drinks')
)


MenuItem.create(
  name: 'Cream Cheese',
  price: 3.50,
  menu_category: MenuCategory.find_by(name: 'Bagels')
)

MenuItem.create(
  name: 'Lox & Schmear',
  price: 5.25,
  menu_category: MenuCategory.find_by(name: 'Bagels')
)


MenuItem.create(
  name: 'Cheese Cake',
  price: 3.75,
  menu_category: MenuCategory.find_by(name: 'Sweets')
)
