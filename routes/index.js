var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to #ThatGuy!' });
});

router.get('/more', function(req, res) {
  res.render('posts/more', {
      title: 'More Info'
  })
});

module.exports = router;
