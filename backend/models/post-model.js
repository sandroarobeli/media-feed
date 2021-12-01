// Third party modules
const mongoose = require('mongoose')

// Define Post Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date: {
        type: Date,  // To be tested with Postman
        required: true
    },
    reactions: {  // To be tested with Postman
        type: {
            thumbsUp: Number,
            hooray: Number,
            heart: Number,
            rocket: Number,
            eyes: Number
        },  
        required: true
    }
})

// Define Post class per its Schema (Blueprint)
const Post = mongoose.model('Post', postSchema)

module.exports = Post