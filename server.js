const express = require('express');

const UsersRouter = require('./users/users-router.js');
const WelcomeRouter = require('./welcome/welcome-router.js');

const ProjectsRouter = require('./projects/projects-router.js');
const RemindersRouter = require('./reminders/reminders-router.js');



const server = express();

server.use(express.json());

server.use('/', WelcomeRouter)
server.use('/api/users/', UsersRouter);
server.use('/api/users/', RemindersRouter);
server.use('/api/users/', ProjectsRouter);

module.exports = server;