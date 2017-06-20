class CreateSubmissions < ActiveRecord::Migration[5.1]
  def change
    create_table :submissions do |t|
      t.integer :wait_time
      t.integer :meal_time
      t.string :day
      t.time :time
      t.integer :rating
      t.string :comments
      t.references :restaurant, foreign_key: true

      t.timestamps
    end
  end
end
