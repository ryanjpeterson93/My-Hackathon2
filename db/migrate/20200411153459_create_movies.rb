class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.text :summary
      t.string :genre
      t.integer :run_time
      t.string :rating
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
