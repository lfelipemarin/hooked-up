class CreateCvs < ActiveRecord::Migration[7.0]
  def change
    create_table :cvs do |t|
      t.belongs_to :user, class_name: 'user', foreign_key: 'user_id'
      t.longtext :summary
      t.timestamps
    end
  end
end
