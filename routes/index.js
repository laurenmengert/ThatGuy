var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('---->',req.originalUrl);
  res.render('index', { title: 'Welcome to #ThatGuy!' });
  
});

module.exports = router;
