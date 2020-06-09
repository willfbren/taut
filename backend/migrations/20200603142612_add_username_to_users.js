
exports.up = function(knex) {
    return knex.schema.table('users', function(t) {
        t.string('username');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
