class AddExtraFieldsToExperiences < ActiveRecord::Migration[7.0]
  def change
    add_column :experiences, :description, :longtext, after: 'name'
    add_column :experiences, :date_start, :datetime, after: 'description'
    add_column :experiences, :date_end, :datetime, after: 'date_start'
  end
end
