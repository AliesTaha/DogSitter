class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :password_digest
      t.string :instagram
      t.string :bio
      t.string :address
      t.boolean    :is_owner, default: false
      t.timestamps
    end
  end
end
