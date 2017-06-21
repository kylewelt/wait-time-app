class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :url
      t.string :address
      t.string :locality
      t.string :city
      t.string :zipcode
      t.integer :average_cost_for_two
      t.string :thumb
      t.string :image
      t.string :user_rating

      t.timestamps
    end
  end
end
