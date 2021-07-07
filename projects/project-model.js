const db = require('../data/db-config');
const router = require('./project-router');

module.exports = {
    resources,
    addResource,
    projects,
    addProject,
    addTask,
    tasks
};

function resources(){
    return db('resources')
}

function addResource(body){
    return db('resources')
        .insert(body,'id')
        .then(ids => {
            const id = ids[0]
            return db('resources')
                .where({id})
                .first()
        })
};

function projects(){
    return db('projects')
}

function addProject(body){
    return db('projects')
        .insert(body,'id')
        .then(ids => {
            const id = ids[0]
            return db('projects')
                .where({id})
                .first()
        })
};

function addTask(body,id){
    const newBody = {...body, project_id: id}
    return db('tasks as t')
        .insert(newBody)
        .then(ids => {
            const id = ids[0]
            return db('tasks')
                .where({id})
                .first()
        })
}
function tasks() {
    return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select( 't.description as taskDescription' ,'p.name  as projectName', 'p.description as projectDescription')
}




