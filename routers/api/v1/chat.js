const express = require('express')
const router = express.Router();
const chatController = require('../../../controllers/api/v1/chat');

//get   api/v1/message
router.get('/',chatController.getAll);
  
  
  //post api/v1/message
  router.post('/',chatController.create);

  module.exports = router;