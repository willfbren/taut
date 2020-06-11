exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("messages")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("messages").insert([
                {
                    id: 1,
                    content: "Hey, could you help me with something?",
                    user_id: 3,
                    channel_id: 2,
                },
                {
                    id: 2,
                    content: "Sure, what do you need?",
                    user_id: 1,
                    channel_id: 2,
                },
                {
                    id: 3,
                    content: "I can't seem to figure out why I'm getting this error.",
                    user_id: 3,
                    channel_id: 2,
                },
            ]);
        });
};
