class RemoveCvSummaryColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :cvs, :summary
  end
end
