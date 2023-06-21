class CreateExperienceByCvs < ActiveRecord::Migration[7.0]
  def change
    create_table :experience_by_cvs do |t|
      t.belongs_to :cv, class_name: 'cv', foreign_key: 'cv_id'
      t.belongs_to :experience, class_name: 'experience', foreign_key: 'experience_id'
      t.timestamps
    end
  end
end
