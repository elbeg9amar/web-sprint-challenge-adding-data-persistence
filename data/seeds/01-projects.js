
exports.seed = function(knex) {
  const projects = [
    {
      name:'sprint1',
      description:'completed in 3'
    },
    {
      name:'sprint2',
      description:'completed in 3'
    },
    {
      name:'sprint4',
      description:'completed in 3'
    },
    {
      name:'sprint5',
      description:'completed in 3'
    }
  ]
    return knex('projects').insert(projects);
};
