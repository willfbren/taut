const bcrypt = require('bcrypt')
const password = "password"
const hash = bcrypt.hashSync(password, 10)

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
                },
                {
                    id: 2,
                    email: "chris@gmail.com",
                    password: hash,
                    name: "Chris Brennan",
                },
                {
                    id: 3,
                    email: "erin@gmail.com",
                    password: hash,
                    name: "Erin Brennan",
                },
            ]);
        });
};
