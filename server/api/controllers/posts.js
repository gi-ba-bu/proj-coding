const express = require('express');
const router = express.Router();

//const Dog = require('../models/dog')
const Post = require('../models/post')


// dogs index route
router.get('/', async (req, res) => {
    try {
        const posts = await Post.all
        res.json({posts})
    } catch(err) {
        res.status(500).json({err})
    }
})


// posts show route
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(parseInt(req.params.id))
        res.json(post)
    } catch(err) {
        res.status(404).json({err})
    }
})

// Create post route
router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body.title, req.body.main, req.body.username)
        res.json(post)
    } catch(err) {
        res.status(404).json({err})
    }
})

module.exports = router;
