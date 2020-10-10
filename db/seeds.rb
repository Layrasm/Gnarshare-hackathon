# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"



Post.destroy_all
User.destroy_all

5.times do |i|    
 user = User.new
 user.id = i
 user.email = "gnarboi#{i}@powder.com"
 user.password = '123456'
 user.password_confirmation = '123456'
 user.first_name = Faker::Name.first_name
 user.last_name = Faker::Name.last_name
 user.save!
 puts user.email + " created"

 puts "Seeding GNAR users #{i}"

 5.times do |j|
    pn = Post.new
    pn .id = j + (i * 3)
    pn.name = Faker::Name.name
    pn.body = Faker::Lorem.words
    pn.avaliable_spots = Faker::Number.number(digits: 5)
    pn.departure_location = Faker::Address.street_address
    pn.rider_level = Faker::Number.number(digits: 3)
    pn.departure_time = Faker::Time.between(from: DateTime.now - 1, to: DateTime.now)
    pn.car_type = Faker::Vehicle.manufacture
  end

  puts "Seed Success"
end
end