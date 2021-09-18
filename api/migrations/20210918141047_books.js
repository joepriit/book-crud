exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("books", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("description");
      table.integer("published").defaultTo(1);
      table.string("created_at");
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([knex.schema.dropTable("books")]);
};
