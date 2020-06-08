var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/:id', isLoggedIn, commentsCtrl.create);
router.delete('/:id/comments', isLoggedIn, commentsCtrl.delete);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;