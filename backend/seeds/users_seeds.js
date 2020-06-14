const bcrypt = require('bcrypt')
const password = "password"
const hash = bcrypt.hashSync(password, 10)
const faker = require('faker')

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("users")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("users").insert([
                {
                    id: 1,
                    email: "willfbren@gmail.com",
                    password: hash,
                    name: "Will Brennan",
                    avatar: null
                },
                {
                    id: 2,
                    email: faker.internet.email(),
                    password: hash,
                    name: faker.name.findName(),
                    avatar: faker.image.avatar()
                },
                {
                    id: 3,
                    email: faker.internet.email(),
                    password: hash,
                    name: faker.name.findName(),
                    avatar: faker.image.avatar()
                },
                {
                    id: 4,
                    email: faker.internet.email(),
                    password: hash,
                    name: faker.name.findName(),
                    avatar: faker.image.avatar()
                },
                {
                    id: 5,
                    email: faker.internet.email(),
                    password: hash,
                    name: faker.name.findName(),
                    avatar: faker.image.avatar()
                },
                {
                    id: 6,
                    email: faker.internet.email(),
                    password: hash,
                    name: faker.name.findName(),
                    avatar: faker.image.avatar()
                },
                {
                    id: 7,
                    email: faker.internet.email(),
                    password: hash,
                    name: faker.name.findName(),
                    avatar: faker.image.avatar()
                },
            ]);
        });
};
