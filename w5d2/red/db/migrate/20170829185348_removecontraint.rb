class Removecontraint < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :password_digest, :string, null: true
    change_column :users, :session_token, :string, null: true
  end
end
