exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("teams")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("teams").insert([
                { id: 1, team_name: "Learn Code", team_code: "learn-code" },
                { id: 2, team_name: "Flatiron School", team_code: "flatiron-school" }
            ]);
        });
};
