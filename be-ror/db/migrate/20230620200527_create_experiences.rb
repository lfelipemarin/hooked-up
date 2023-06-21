class CreateExperiences < ActiveRecord::Migration[7.0]
  def change
    create_table :experiences do |t|
      t.string :name
      t.belongs_to :experience_type, class_name: 'experience_type', foreign_key: 'experience_type_id'
      t.timestamps
    end
  end
end
