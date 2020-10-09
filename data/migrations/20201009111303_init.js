
exports.up = function(knex) {
    return knex.schema
        .createTable('project', tbl => {
            tbl.increments();
            tbl.string('name', 100).notNullable().unique();
            tbl.text('description', 100);
            tbl.boolean("completed").notNullable().defaultTo(0);
            tbl.integer('task_id').unsigned().references('task.id').onDelete('RESTRICT').onUpdate('CASCADE');
        })
        .createTable('task', tbl => {
            tbl.increments();
            tbl.text('description').notNullable();
            tbl.string('notes',150);
            tbl.boolean("completed").notNullable().defaultTo(0);
        })
        .createTable('resource', tbl => {
            tbl.increments();
            tbl.string('name', 100).notNullable();
            tbl.text('description',150);
            tbl.integer('project_id').unsigned().references('project.id').onDelete('RESTRICT').onUpdate('CASCADE');
        })
};

exports.down = function(knex) {

};
