# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_06_20_213238) do
  create_table "cvs", charset: "utf8", force: :cascade do |t|
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_cvs_on_user_id"
  end

  create_table "experience_by_cvs", charset: "utf8", force: :cascade do |t|
    t.bigint "experiences_id"
    t.bigint "cvs_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cvs_id"], name: "index_experience_by_cvs_on_cvs_id"
    t.index ["experiences_id"], name: "index_experience_by_cvs_on_experiences_id"
  end

  create_table "experience_types", charset: "utf8", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "experiences", charset: "utf8", force: :cascade do |t|
    t.string "name"
    t.bigint "experience_types_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["experience_types_id"], name: "index_experiences_on_experience_types_id"
  end

  create_table "summaries", charset: "utf8", force: :cascade do |t|
    t.string "summary_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "summary_by_cvs", charset: "utf8", force: :cascade do |t|
    t.bigint "summary_id"
    t.bigint "cv_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cv_id"], name: "index_summary_by_cvs_on_cv_id"
    t.index ["summary_id"], name: "index_summary_by_cvs_on_summary_id"
  end

  create_table "users", charset: "utf8", force: :cascade do |t|
    t.string "name"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "address"
    t.string "phone_number"
    t.string "cellphone_number"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "jti", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["jti"], name: "index_users_on_jti", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "cvs", "users"
  add_foreign_key "experience_by_cvs", "cvs", column: "cvs_id"
  add_foreign_key "experience_by_cvs", "experiences", column: "experiences_id"
  add_foreign_key "experiences", "experience_types", column: "experience_types_id"
  add_foreign_key "summary_by_cvs", "cvs"
  add_foreign_key "summary_by_cvs", "summaries"
end
