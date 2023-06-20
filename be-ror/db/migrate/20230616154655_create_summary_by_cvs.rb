class CreateSummaryByCvs < ActiveRecord::Migration[7.0]
  def change
    create_table :summary_by_cvs do |t|
      t.belongs_to :summary, class_name: 'summary', foreign_key: 'summary_id'
      t.belongs_to :cv, class_name: 'cv', foreign_key: 'cv_id'
      t.timestamps
    end
  end
end
