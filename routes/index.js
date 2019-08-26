var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Birthday Chat' });
});

router.get('/signup', (req, res, next) =>{
  res.render('signup');
});
router.get('/login', (req, res, next) =>{
  res.render('login');
});


module.exports = router;
