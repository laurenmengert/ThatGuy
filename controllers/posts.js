const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
    show,
    edit,
    update,
    delete: delPost
}

function index(req, res) {
    Post.find({}).populate('user').sort('-createdAt').exec(function(err, posts) {
        res.render('posts/index', { 
            title: 'All Posts', 
            posts,
        }); 
    })
}

function newPost(req, res) {
    res.render('posts/new', {title: 'Add Post'});
}

function create(req, res) {
    if(!req.body.content && !req.body.imageUrl){
        console.log('req.body 1:', req.body)
        res.render('posts/new', {title: 'Please Enter Input'});
    }  else {
        req.body.user = req.user
        console.log('req.body 2:',req.body);
        Post.create(req.body, function(err) {
        res.redirect('/posts'); //url path
        
        });
    }
}   

function show(req, res) {
    Post.findById(req.params.id).populate('user').populate('comments.user')
    .exec(function(err, post) {
        let comments = post.comments.reverse();
        res.render('posts/show', {
            title: 'Post Detail',
            post,
            comments
        })
    })
}

function edit(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/edit', {
            title: 'Edit Post',
            post
        })
    })
}

function update(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, function(err) {
        res.redirect('/posts');
    })
}

function delPost(req, res) {
    Post.findByIdAndRemove(req.params.id, function(err) {
        res.redirect('/posts');
    })
}



// function index(req, res) {
//     Post.find({user:req.user}, function(err, posts) {
//         res.render('posts/index', {title: 'All Posts', posts});
//     })
// }