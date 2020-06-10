exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("user_team")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("user_team").insert([
                { id: 1, user_id: 1, team_id: 1 },
                { id: 2, user_id: 3, team_id: 1 }
            ]);
        });
};
