const express = require('express');
const router = express.Router();
const {login } = require('../controllers/authController');
const path = require("path")
const multer = require("multer")
// const Product = require('../models/User');
const bcrypt = require('bcryptjs');



router.post('/login', login);


module.exports = router;
