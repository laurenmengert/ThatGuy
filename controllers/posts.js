const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create
}

function index(req, res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', {title: 'All Posts', posts});
    })
}

function newPost(req, res) {
    res.render('posts/new', {title: 'Add Post'});
}

function create(req, res) {
    
}

