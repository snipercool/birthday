var express = require('express');
var router = express.Router();
<<<<<<< HEAD
=======
const authController = require('../controllers/auth');
>>>>>>> bba63df795c77856d0214b287011adbdd731fba2

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

<<<<<<< HEAD
=======
router.post('/signup', authController.signup);
router.post('/login', authController.login);

>>>>>>> bba63df795c77856d0214b287011adbdd731fba2
module.exports = router;
