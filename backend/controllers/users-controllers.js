// Third party
const mongoose = require('mongoose')

// Custom
const User = require('../models/user-model')

// List all Users
const getAllUsers = async (req, res, next) => {
    try {
        const existingUsers = await User.find({})
        if (existingUsers.length === 0) {
            console.log('No Users listed at this time')
        }
        res.status(200).json({ users: existingUsers })
    } catch (error) {
       // return next(new Error(`Unable to retrieve places: ${error.message}`)) Restore when done
        return next(new Error('Error from getAllUsers\n' + error.message))
    }
}

// Create a User
const createUser = async (req, res, next) => {
    const { name } = req.body
    try {
        const createdUser = new User({
            name,
            posts: []
        })
        await createdUser.save()
        res.status(201).json({ user: createdUser })
    } catch (error) {
        //return next(new Error(`Creating User failed: ${error.message}`)) restore when finished
        return next(new Error('Error from createUser\n' + error.message))
    }
}

// More controllers to be added as needed...

exports.getAllUsers = getAllUsers
exports.createUser = createUser