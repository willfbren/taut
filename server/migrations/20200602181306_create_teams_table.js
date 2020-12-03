
exports.up = function(knex) {
    return knex.schema.createTable('teams', function(t) {
        t.increments();
        t.string('team_name');
        t.string('team_code');
        t.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('teams');
};
