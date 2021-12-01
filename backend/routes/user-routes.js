// Third party 
const express = require('express')
const { check } = require('express-validator')

// Custom modules
const usersControllers = require('../controllers/users-controllers')

// Initializing the router object
const router = express.Router()

// List all Users
router.get('/', usersControllers.getAllUsers)

// Create a User
router.post('/', usersControllers.createUser)

// More routes to be added as needed...

module.exports = router
