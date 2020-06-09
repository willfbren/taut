
exports.up = function(knex) {
    return knex('users').where('id', '>', 0 ).del() 
};

exports.down = function(knex) {
  
};
