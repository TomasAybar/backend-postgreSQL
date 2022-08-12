// const Router = require('express').Router();

const Router  = require('express').Router()

// const userControllers = require('../controllers/userControllers')

const { getUsers, createUser, getOneUser, removeUser, modifyUser } = require('../controllers/userControllers')

Router.route('/users')
    .get(getUsers)
    .post(createUser)

Router.route('/users/:id')
    .get(getOneUser)
    .delete(removeUser)
    .put(modifyUser)

module.exports = Router