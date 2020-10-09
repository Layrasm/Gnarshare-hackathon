class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :name
      t.text :body
      t.integer :avaliable_spots
      t.string :departure_location
      t.string :resort
      t.string :ride_type
      t.string :rider_level
      t.string :departure_time
      t.string :car_type
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
