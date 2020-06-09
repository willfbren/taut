
exports.up = function(knex) {
    return knex.schema.table('users', function(t) {
        t.dropColumn('string');
    })
};

exports.down = function(knex) {
    return knex('users').where('*').del()
};
