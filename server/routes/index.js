const express = require('express');
var router = express.Router();
const controller = require("../controller/index");

// Hr/admin 
router.post('/register', controller.register);

module.exports = router;