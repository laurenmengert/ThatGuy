const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports = {
    create
}

function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        req.body.user = req.user
        req.body.post = post._id
        Comment.create(req.body, function(err, comment) {
            console.log(comment);
            res.redirect(`/posts/${post._id}`);
            
        })
    })
}