# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  Artist.create(
    albums: [Faker::Music.album, Faker::Music.album, Faker::Music.album],
    genre: Faker::Music.genre,
  )
end

10.times do
  Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    summary: Faker::Lorem.paragraph(sentence_count: 3),
    genre: Faker::Book.genre,
  )
end

10.times do
  Movie.create(
    title: Faker::Book.title,
    summary: Faker::Lorem.paragraph(sentence_count: 3),
    genre: Faker::Book.genre,
    run_time: Faker::Number.within(range: 65..185),
    rating: ['G', 'PG', 'PG13', 'M', 'R'].sample,
  )

end