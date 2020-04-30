const express = require('express');
const routes = express.Router();
const GetUser = require('./controllers/GetUsers');

routes.get('/api/users', GetUser.usersAll);

routes.get('/api/users/:username/details', GetUser.userGet);

routes.get('/api/users/:username/repos', GetUser.userRepos);

module.exports = routes;