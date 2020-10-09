const express = require('express');
const helmet = require('helmet');
const ProjectRouters = require('../projects/project-router')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api',ProjectRouters);

server.get('/', (req,res) => {
    res.status(200).json({API: 'running'})
})

module.exports = server;
