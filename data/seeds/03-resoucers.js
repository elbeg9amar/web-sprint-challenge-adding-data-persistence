
exports.seed = function(knex) {
  const resources = [
    {
      name:"tsoo shione from resources"
    },
    {
      name:"tsoo shione from resources1"
    },
    {
      name:"tsoo shione from resources2",
    },
    {
      name:"tsoo shione from resources3"
    },
    {
      name:"tsoo shione from resources*9"
    },
  ]
  return knex('resources').insert(resources);
};
