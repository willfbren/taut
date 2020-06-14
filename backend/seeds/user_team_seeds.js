exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("user_team")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("user_team").insert([
                { id: 1, user_id: 1, team_id: 1 },
                { id: 2, user_id: 2, team_id: 1 },
                { id: 3, user_id: 3, team_id: 1 },
                { id: 4, user_id: 4, team_id: 1 },
                { id: 5, user_id: 5, team_id: 1 },
                { id: 6, user_id: 6, team_id: 2 },
                { id: 7, user_id: 7, team_id: 2 }
            ]);
        });
};
