// implement changes to the schema
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lambda', tbl=>{
    //each table needs a primary key 
    // we call it id, integer, auto-increment
    tbl.increments();
    tbl.string('name', 128).notNull().unique()

    tbl.timestamps(true,true); // created_at and updated_at
  })
};

// undo the changes
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lambda')
};

// npx knex init
// npx knex migrate:make insertname
// npx knex migrate:latest
