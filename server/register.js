const express = require('express');
const mongoose = require('mongoose');
const request = require('request');
const User = require('./userModel');

require('dotenv').config();

const router = express.Router();

router.post('/', (req, res) => {
  let user = new User();

  user.name = req.body.name;
  user.save();
  const jwt = user.generateJWT();
  res.send(jwt);
})

module.exports = router;
