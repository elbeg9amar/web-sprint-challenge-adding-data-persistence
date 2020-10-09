
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name', 100).notNullable().unique();
            tbl.text('description');
            tbl.boolean("completed").notNullable().defaultTo(0);
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.text('description').notNullable();
            tbl.string('notes',150);
            tbl.boolean("completed").notNullable().defaultTo(0);
            tbl.integer('project_id').unsigned().references('projects.id').onDelete('RESTRICT').onUpdate('CASCADE');
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('name', 100).notNullable();
            tbl.text('description',150);
            tbl.integer('project_id').unsigned().references('projects.id').onDelete('RESTRICT').onUpdate('CASCADE');
        })
};

exports.down = function(knex) {
        return knex.schema
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};  
