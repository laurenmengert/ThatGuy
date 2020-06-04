var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.index);
router.get('/new', isLoggedIn, postsCtrl.new);
router.get('/:id', postsCtrl.show)
router.get('/:id/edit', isLoggedIn, postsCtrl.edit)
router.post('/', isLoggedIn, postsCtrl.create);
router.delete('/:id', isLoggedIn, postsCtrl.delete);
router.put('/:id', isLoggedIn, postsCtrl.update);



function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;