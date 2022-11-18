class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :savepoint
      t.integer :defense
      t.integer :strength
      t.integer :health
      t.integer :intelligence
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
