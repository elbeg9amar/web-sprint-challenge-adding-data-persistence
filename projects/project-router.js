const express = require('express');


const model = require('./project-model');

const router = express.Router();

router.get('/resource', (req,res) => {
    model.resources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err:err})
    });
});

router.post('/resource' ,(req,res) => {
    const body = req.body;
    model.addResource(body)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err: err})
        });
});

router.get('/projects', (req,res) => {
    model.projects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err:err})
    });
});

router.post('/projects', (req,res) => {
    model.addProject(req.body)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err:err})
    });
});

router.post('/:id/tasks', (req,res) => {
    const id = req.params.id;
    const body = req.body
    model.addTask(body,id)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err:err})
    });
});

router.get('/tasks', (req,res) => {
    model.tasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err:err})
    })
})

module.exports = router