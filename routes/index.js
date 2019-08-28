var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { title: 'Express' });
});

=======
  res.render('index', { title: 'Birthday Chat' });
});

router.get('/signup', (req, res, next) =>{
  res.render('signup');
});
router.get('/login', (req, res, next) =>{
  res.render('login');
});


>>>>>>> bba63df795c77856d0214b287011adbdd731fba2
module.exports = router;
