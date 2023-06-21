# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ExperienceByCv.destroy_all
SummaryByCv.destroy_all
Summary.destroy_all
Experience.destroy_all
ExperienceType.destroy_all
Cv.destroy_all
User.destroy_all

User.connection.exec_query("ALTER TABLE #{User.table_name} AUTO_INCREMENT = 0")
SummaryByCv.connection.exec_query("ALTER TABLE #{SummaryByCv.table_name} AUTO_INCREMENT = 0")
Cv.connection.exec_query("ALTER TABLE #{Cv.table_name} AUTO_INCREMENT = 0")
Summary.connection.exec_query("ALTER TABLE #{Summary.table_name} AUTO_INCREMENT = 0")
ExperienceByCv.connection.exec_query("ALTER TABLE #{ExperienceByCv.table_name} AUTO_INCREMENT = 0")
Experience.connection.exec_query("ALTER TABLE #{Experience.table_name} AUTO_INCREMENT = 0")
ExperienceType.connection.exec_query("ALTER TABLE #{ExperienceType.table_name} AUTO_INCREMENT = 0")

experience_job_type = ExperienceType.new
experience_job_type.name = 'Job'
experience_job_type.description = 'Job Type'
experience_job_type.save!

experience_personal_type = ExperienceType.new
experience_personal_type.name = 'Personal Projects'
experience_personal_type.description = 'Personal Projects Type'
experience_personal_type.save!

(1..20).each do |i|
  puts i
  user = User.new
  user.email = "test#{i}@example.com"
  user.password = 'valid_password'
  user.password_confirmation = 'valid_password'
  user.encrypted_password = '#$taawktljasktlw4aaglj'
  user.save!
  cv = user.cvs.create
  (1..4).each do |j|
    summary = Summary.new
    summary.summary_text = "summary text #{i}"
    summary.save!

    experience = Experience.new
    if j.even?
      experience.name = "Company X#{j}"
      experience.description = 'In charge of xyz even stuff and more and more'
      experience.date_start = Date.new(2015, 6, 15).advance(years: j)
      experience.date_end = Date.new(2015, 6, 15).advance(years: j + 1)
      experience.experience_type_id = 3
    else
      experience.name = "Company Y#{j}"
      experience.description = 'In charge of xyz odd stuff and more and more'
      experience.date_start = Date.new(2015, 6, 15).advance(years: j)
      experience.date_end = Date.new(2015, 6, 15).advance(years: j + 1)
      experience.experience_type_id = 4
    end
    experience.save!
    cv.summary_by_cvs.create(summary_id: summary.id)
    cv.experience_by_cvs.create(experience_id: experience.id)
  end
end
