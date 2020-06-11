exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("channels")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("channels").insert([
                { id: 1, channel_name: "general", channel_description: "For general purpose conversation", team_id: 1 },
                { id: 2, channel_name: "code", channel_description: "For help with technical coding issues", team_id: 1 },
                { id: 3, channel_name: "gaming", channel_description: "Find fellow Flatiron students to play with", team_id: 1 }
            ]);
        });
};
