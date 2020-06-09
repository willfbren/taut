
exports.up = function(knex) {
    return knex.schema.createTable('users', function(t) {
        t.increments();
        t.string('string');
        t.string('email');
        t.string('password');
        t.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
