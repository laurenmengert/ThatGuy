const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports = {
    create
}

function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        req.body.post = post._id
        Comment.create(req.body, function(err) {
            res.redirect(`/posts/${post._id}`);
        })
    })
}