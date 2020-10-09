
exports.seed = function(knex) {
  const table = [
    {
      project_id: 1,
      resource_id:1
    },
    {
      project_id: 1,
      resource_id:2
    },
    {
      project_id: 2,
      resource_id:1
    },

  ]  
  return knex('project_resource').insert(table);
};
