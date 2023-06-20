class CreateSummaries < ActiveRecord::Migration[7.0]
  def change
    create_table :summaries do |t|
      t.string :summary_text
      t.timestamps
    end
  end
end
