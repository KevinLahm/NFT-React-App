class CreateArts < ActiveRecord::Migration[6.1]
  def change
    create_table :arts do |t|
      t.string :name
      t.float :price
      t.string :description
      t.belongs_to :gallery, null: false, foreign_key: true

      t.timestamps
    end
  end
end
