# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170620170913) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.string "address"
    t.string "locality"
    t.string "city"
    t.string "zipcode"
    t.integer "average_cost_for_two"
    t.string "thumb"
    t.string "image"
    t.string "user_rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "submissions", force: :cascade do |t|
    t.integer "wait_time"
    t.integer "meal_time"
    t.string "day"
    t.time "time"
    t.integer "rating"
    t.string "comments"
    t.bigint "restaurant_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_submissions_on_restaurant_id"
  end

  add_foreign_key "submissions", "restaurants"
end
