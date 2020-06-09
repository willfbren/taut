
exports.up = function(knex) {
    return knex.schema.createTable('messages', function(t) {
        t.increments();
        t.string('content');
        t.integer('user_id');
        t.integer('channel_id');
        t.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('messages');
};
