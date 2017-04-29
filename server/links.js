const express = require('express');
const mongoose = require('mongoose');
const User = require('./userModel');
const jwt = require('express-jwt');
require('dotenv').config();

const authCheck = jwt({
  secret: process.env.SECRET,
  // to make sure the token is recived properly
  getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization) {
      let token = req.headers.authorization;
      token = token.slice(1, token.length - 1);
        return token
    }
  }
});

const router = express.Router();

router.post('/addLink', authCheck, (req, res) => {
  User.findById(req.user._id, (error, user) => {
    if (error) {
      return res.status(400).send(error);
    }
    req.body.listItem._id = mongoose.Types.ObjectId();
    user.links.push(req.body.listItem);
    user.save().then(() => {
      return res.send(req.body.listItem);
    });
  });
})

router.get('/getLinks', authCheck, (req, res) => {
  User.findById(req.user._id, (error, user) => {
    if (error) {
      return res.status(400).send(error);
    }
    return res.send(user.links);
  });
})

router.post('/removeLink', authCheck, (req, res) => {
  User.findById(req.user._id, (error, user) => {
    if (error) {
      return res.status(400).send(error);
    }
    const links = user.links.filter(item => {
      return item._id != req.body.key
    });
    user.links = links;
    user.save().then(() => {
      return res.send(links);
    })
  });
})

module.exports = router;
