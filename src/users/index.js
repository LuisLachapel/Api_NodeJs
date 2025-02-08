const express = require('express');
const {UserController} = require('./controller')

const router = express.Router();

module.exports.UserApi = (app) =>{
    router
    .get('/',UserController.getUsers)
    .get('/:id',UserController.getUser)
    .post('/',UserController.insertUser)
    
    app.use('/api/users', router)
}