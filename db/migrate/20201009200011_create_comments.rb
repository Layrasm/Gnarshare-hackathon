class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :name
      t.text :body
      t.string :trip_type
      t.integer :res_spots
      t.string :pickup_spot
      t.string :rider_level
      t.string :rider_type
      t.belongs_to :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
