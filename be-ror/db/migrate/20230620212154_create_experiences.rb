class CreateExperiences < ActiveRecord::Migration[7.0]
  def change
    create_table :experiences do |t|
      t.string :name
      t.belongs_to :experience_types, class_name: 'experience_types', foreign_key: 'experience_types_id'
      t.timestamps
    end
  end
end
