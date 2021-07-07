
exports.seed = function(knex) {
  const tasks = [
    {
      description: "added new",
      notes:"newnoteshdeee",
      project_id: 1
    },
    {
      description: "added2",
      notes:"newnoteshdeee",
      project_id: 2
    },
    {
      description: "added new 3",
      notes:"newnoteshdeee",
      project_id: 3
    },
    {
      description: "added new 54",
      notes:"newnoteshdeee",
      project_id: 4
    }
  ]
  return knex('tasks').insert(tasks);
};
