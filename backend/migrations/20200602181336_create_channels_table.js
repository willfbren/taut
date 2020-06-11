
exports.up = function(knex) {
    return knex.schema.createTable('channels', function(t) {
        t.increments();
        t.string('channel_name');
        t.string('channel_description');
        t.integer('team_id')
        t.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_team');
};
