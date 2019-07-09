const express = require('express')
const router = express.Router();

router.get('/',(req, res) => {
    res.send("get messages")
  })
  
  //get   api/v1/message
  
  //post api/v1/message
  router.post('/',(req, res) => {
    res.send("get messages")
  })

  module.exports = router;