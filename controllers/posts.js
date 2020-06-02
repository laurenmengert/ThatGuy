const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
    show
}

function index(req, res) {
    Post.find({}, function(err, posts) {
        console.log(posts);
        res.render('posts/index', { //file path
            title: 'All Posts', 
            posts,
        }); 
    })
}

function newPost(req, res) {
    res.render('posts/new', {title: 'Add Post'});
}

function create(req, res) {
    req.body.user = req.user
    console.log(req.body);
    Post.create(req.body, function(err) {
        res.redirect('/posts'); //url path
    })
}

function show(req, res) {
    Post.findById(req.params.id, function(err) {
        res.render('posts/show', {
            title: 'Post Detail',
        })
    })
}


// function index(req, res) {
//     Post.find({user:req.user}, function(err, posts) {
//         res.render('posts/index', {title: 'All Posts', posts});
//     })
// }