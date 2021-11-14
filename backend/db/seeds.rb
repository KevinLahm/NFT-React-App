# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

wizards = Gallery.create(title: "Wizards")
nba_greats = Gallery.create(title: "NBA Greats")
fashion_icons = Gallery.create(title: "Fashion Icons")

Art.create(name: "Harry Potter", price: 2, description: "The boy who lived.", gallery: wizards)
Art.create(name: "Glinda the Good Witch", price: 1.3, description: "I'm just here to help Dorothy.", gallery: wizards)
Art.create(name: "Yoda", price: 10.2, description: "Never defeated.", gallery: wizards)

Art.create(name: "Kobe Bryant", price: 100, description: "Black Mamba.", gallery: nba_greats)
Art.create(name: "Allen Iverson", price: 50.4, description: "The Answer.", gallery: nba_greats)
Art.create(name: "Lebron James", price: 99, description: "The King.", gallery: nba_greats)

Art.create(name: "Jerry Lorenzo", price: 8.1, description: "Fear of God", gallery: fashion_icons)
Art.create(name: "Pyer Moss", price: 11, description: "Fashion built on heritage and activism", gallery: fashion_icons)
Art.create(name: "Rei Kawakubo", price: 7, description: "Comme des Garcons", gallery: fashion_icons)