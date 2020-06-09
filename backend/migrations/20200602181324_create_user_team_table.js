
exports.up = function(knex) {
    return knex.schema.createTable('user_team', function(t) {
        t.increments();
        t.integer('user_id');
        t.integer('team_id');
        t.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_team');
};
