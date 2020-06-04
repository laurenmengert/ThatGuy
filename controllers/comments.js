const Post = require('../models/post');


module.exports = {
    create,
    delete: delComment
}

function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        req.body.user = req.user
        // console.log(req.body);
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`);   
        })
    })
}


function delComment(req, res) {
    Post.findOne({'comments._id': req.params.id}, function(err, post) {
      post.comments.id(req.params.id).remove();
      post.save(function(err) {
        res.redirect(`/posts/${post._id}`);
      });
    });
  }