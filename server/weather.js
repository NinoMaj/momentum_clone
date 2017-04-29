const express = require('express');
const request = require('request');
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

router.post('/', authCheck, (req, res) => {
  request(`http://api.openweathermap.org/data/2.5/weather?lat=${req.body.lat}&lon=${req.body.lon}&APPID=${process.env.WEATHER}`, (error, response, body) => {
    if (error) {
      return res.status(400).send(error);
    }
    return res.send(body);
  });
});

module.exports = router;
