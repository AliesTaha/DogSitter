class CreatePets < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :description
      t.string :breed
      t.integer :user_id
      t.integer :age
      t.timestamps
    end

  end
end
