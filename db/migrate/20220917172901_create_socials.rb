class CreateSocials < ActiveRecord::Migration[7.0]
  def change
    create_table :socials do |t|
      t.string :facebook
      t.string :instagram
      t.string :discord
      t.integer  :phone_number
      t.integer :user_id
      t.timestamps
    end
  end
end
