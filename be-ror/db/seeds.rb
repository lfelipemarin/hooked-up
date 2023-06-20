# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

SummaryByCv.destroy_all
Cv.destroy_all
Summary.destroy_all
User.destroy_all

User.connection.execute("ALTER TABLE #{User.table_name} AUTO_INCREMENT = 0")
SummaryByCv.connection.execute("ALTER TABLE #{SummaryByCv.table_name} AUTO_INCREMENT = 0")
Cv.connection.execute("ALTER TABLE #{Cv.table_name} AUTO_INCREMENT = 0")
Summary.connection.execute("ALTER TABLE #{Summary.table_name} AUTO_INCREMENT = 0")

for i in 1..20 do
  user = User.new
  user.email = "test#{i}@example.com"
  user.password = 'valid_password'
  user.password_confirmation = 'valid_password'
  user.encrypted_password = '#$taawktljasktlw4aaglj'
  user.save!
  5.times do
    user.cvs.create
  end

  summary = Summary.new
  summary.summary_text = "summary text #{i}"
  summary.save!
end
