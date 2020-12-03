const faker = require('faker')

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("messages")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("messages").insert([
                {
                    id: 1,
                    content: faker.lorem.sentences(faker.random.number({ min: 1, max: 5 })),
                    user_id: faker.random.number({ min: 1, max: 7 }),
                    channel_id: faker.random.number({ min: 1, max: 3 }),
                },
                {
                    id: 2,
                    content: faker.lorem.sentences(faker.random.number({ min: 1, max: 5 })),
                    user_id: faker.random.number({ min: 1, max: 7 }),
                    channel_id: faker.random.number({ min: 1, max: 3 }),
                },
                {
                    id: 3,
                    content: faker.lorem.sentences(faker.random.number({ min: 1, max: 5 })),
                    user_id: faker.random.number({ min: 1, max: 7 }),
                    channel_id: faker.random.number({ min: 1, max: 3 }),
                },
                {
                    id: 4,
                    content: faker.lorem.sentences(faker.random.number({ min: 1, max: 5 })),
                    user_id: faker.random.number({ min: 1, max: 7 }),
                    channel_id: faker.random.number({ min: 1, max: 3 }),
                },
                {
                    id: 5,
                    content: faker.lorem.sentences(faker.random.number({ min: 1, max: 5 })),
                    user_id: faker.random.number({ min: 1, max: 7 }),
                    channel_id: faker.random.number({ min: 1, max: 3 }),
                },
                {
                    id: 6,
                    content: faker.lorem.sentences(faker.random.number({ min: 1, max: 5 })),
                    user_id: faker.random.number({ min: 1, max: 7 }),
                    channel_id: faker.random.number({ min: 1, max: 3 }),
                },
                {
                    id: 7,
                    content: faker.lorem.sentences(faker.random.number({ min: 1, max: 5 })),
                    user_id: faker.random.number({ min: 1, max: 7 }),
                    channel_id: faker.random.number({ min: 1, max: 3 }),
                },
                {
                    id: 8,
                    content: faker.lorem.sentences(faker.random.number({ min: 1, max: 5 })),
                    user_id: faker.random.number({ min: 1, max: 7 }),
                    channel_id: faker.random.number({ min: 1, max: 3 }),
                },
                {
                    id: 9,
                    content: faker.lorem.sentences(faker.random.number({ min: 1, max: 5 })),
                    user_id: faker.random.number({ min: 1, max: 7 }),
                    channel_id: faker.random.number({ min: 1, max: 3 }),
                },
                {
                    id: 10,
                    content: faker.lorem.sentences(faker.random.number({ min: 1, max: 5 })),
                    user_id: faker.random.number({ min: 1, max: 7 }),
                    channel_id: faker.random.number({ min: 1, max: 3 }),
                },
                {
                    id: 11,
                    content: faker.lorem.sentences(faker.random.number({ min: 1, max: 5 })),
                    user_id: faker.random.number({ min: 1, max: 7 }),
                    channel_id: faker.random.number({ min: 1, max: 3 }),
                }
            ]);
        });
};
