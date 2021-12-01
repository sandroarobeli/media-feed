// Third party 
const express = require('express')
const { check } = require('express-validator')

// Custom modules
const postsControllers = require('../controllers/posts-controllers')

// Initializing the router object
const router = express.Router()

// List all posts
router.get('/', postsControllers.getAllPosts)

// List the post by its ID
router.get('/:postId', postsControllers.getPostById)

// Create a new post
router.post('/',
[
    check('title')
        .not()
        .isEmpty(),
    check('content')
        .isLength({ min: 3 })
],
    postsControllers.createPost
)

// Update a post 
router.patch('/:postId',
[
    check('title')
        .not()
        .isEmpty(),
    check('content')
        .isLength({ min: 3 })
],
    postsControllers.updatePost
)

// delete a post
router.delete('/:postId', postsControllers.deletePost)

module.exports = router