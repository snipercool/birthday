const express = require('express');
const router = express.Router();
const birthdayController = require('../../../controllers/api/v1/birthdays'); 

router.get("/", birthdayController.getAll);

router.post("/", birthdayController.create);

module.exports = router;