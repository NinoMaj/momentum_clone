const express = require('express');
const mongoose = require('mongoose');
const request = require('request');

require('dotenv').config();

const router = express.Router();

router.post('/weather', (req, res) => {
  request(`http://api.openweathermap.org/data/2.5/weather?lat=${req.body.lat}&lon=${req.body.lon}&APPID=${process.env.WEATHER}`, (error, response, body) => {
    if (error) {
      return res.status(400).send(error);
    }
    return res.send(body);
  });
});

module.exports = router;
