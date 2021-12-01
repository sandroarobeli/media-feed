// Third party
const mongoose = require('mongoose')
const { validationResult } = require('express-validator')

// Custom
const Post = require('../models/post-model')
const User = require('../models/user-model')

// List all posts
const getAllPosts = async (req, res, next) => {
    try {
        const existingPosts = await Post.find({})
        if (existingPosts.length === 0) {
            console.log('No Posts listed at this time')
        }
        res.status(200).json({ posts: existingPosts })
    } catch (error) {
         // return next(new Error(`Unable to retrieve places: ${error.message}`)) Restore when done
         return next(new Error('Error from getAllPosts\n' + error.message))
    }
 }

// List the post by its ID
const getPostById = async (req, res, next) => {
    const postId = req.params.postId
    try {
        const existingPost = await Post.findById(postId)
        if (!existingPost) {
            return next(new Error(`Post not found`))
        }
        res.status(200).json({ post: existingPost })
    } catch (error) {
       // return next(new Error(`Unable to retrieve Place: ${error.message}`))
        return next(new Error('Error from getPostById'))
    }
 }

// Create a new post
const createPost = async (req, res, next) => {
    // Middleware registered in the routes gets invoked here
    // If returned errors object isn't empty, error is passed down the chain via next()
    // THIS TRY-CATCH ENSURES PROCESSING OF INPUT PROPERTIES 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
       return next(new Error('Invalid inputs entered. Please check your data')) 
    }

    const { title, content, reactions, user } = req.body // date will be added when moved to front
    const createdPost = new Post({
        title,
        content,
        date: new Date().toISOString(),
        reactions,
        user
    })

    // This block ensures that only existing user can create a new place
    let existingUser
    try {
        existingUser = await User.findById(user)
        if (!existingUser) {
            return next(new Error('Creating Post failed. Corresponding User not found. Error from createPost'))
        }
    } catch (error) {
        return next(new Error(`Creating Post failed: ${error.message}. Error from createPost2`))
    }
     // THIS TRY-CATCH ENSURES PROPER NETWORK PROTOCOL EXCHANGE
    try {
        // Transactions let you execute multiple operations 
        // In isolation and potentially undo all the operations if one of them fails.
        const session = await mongoose.startSession()
        
        // Begin Transaction
        session.startTransaction()
        await createdPost.save({ session: session })
        existingUser.posts.push(createdPost) // This push method is unique to mongoose. Adds placeId to user
        await existingUser.save({ session: session })
        await session.commitTransaction()
        // End Transaction

        res.status(201).json({ post: createdPost })
    } catch (error) {
       // return next(new Error(`Creating Post failed: ${error.message}`))
        return next(new Error('Error from createPost3'))
    }
}

        
        
// Update a post 
const updatePost = async (req, res, next) => {
    // Middleware registered in the routes gets invoked here
    // If returned errors object isn't empty, error is passed down the chain via next() 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
       return next(new Error('Invalid inputs entered. Please check your data')) 
    }
    const postId = req.params.postId
    const { title, content } = req.body
    let updatedPost
    try {
        updatedPost = await Post.findById(postId)
        if (!updatedPost) {
            return next(new Error('Post could not be found'))
        }
        updatedPost = await Post.findByIdAndUpdate(
            postId,
            { title, content },
            { new: true }
        )
        res.status(200).json({ post: updatedPost })
    } catch (error) {
       // return next(new Error(`Updating Post failed: ${error.message}`))
        return next(new Error('Error from updatePost'))
    }
}

// delete a post
const deletePost = async (req, res, next) => {
    const postId = req.params.postId
    try {
        const deletedPost = await Post.findByIdAndDelete(postId)
        if (!deletedPost) {
            return next(new Error('Post could not be found'))
        }
        res.status(200).json({ post: `Post ${deletedPost.title} deleted`})
    } catch (error) {
        return next(new Error('Error from deletedPost'))
       // return next(new Error(`Deleting Post failed: ${error.message}`))
    }
}


exports.getAllPosts = getAllPosts
exports.getPostById = getPostById
exports.createPost = createPost
exports.updatePost = updatePost
exports.deletePost = deletePost

