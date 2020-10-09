
exports.seed = function(knex) {
  const resources = [
    {
      name:"tsoo shione from resources",
      project_id: 1
    },
    {
      name:"tsoo shione from resources1",
      project_id: 1
    },
    {
      name:"tsoo shione from resources2",
      project_id: 2
    },
    {
      name:"tsoo shione from resources3",
      project_id: 2
    },
    {
      name:"tsoo shione from resources*9",
      project_id: 3
    },
  ]
  return knex('resources').insert(resources);
};
