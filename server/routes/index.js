const express = require('express');
var router = express.Router();
const controller = require("../controller/index");

// Hr/admin 
router.post('/register', controller.register);
router.post('/login', controller.login);
module.exports = router;
