class CreateExperienceByCvs < ActiveRecord::Migration[7.0]
  def change
    create_table :experience_by_cvs do |t|
      t.belongs_to :experiences, class_name: 'experiences', foreign_key: 'experiences_id'
      t.belongs_to :cvs, class_name: 'cvs', foreign_key: 'cvs_id'
      t.timestamps
    end
  end
end
