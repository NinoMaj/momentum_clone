const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const jwt = require('express-jwt');
const User = require('./userModel');
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

router.post('/addBackgroundHistory', authCheck, (req, res) => {
  User.findById(req.user._id, (error, user) => {
    if (error) {
      return res.status(400).send(error);
    }
    axios.get('https://source.unsplash.com/category/nature/daily')
      .then(response => {
        const urlToSave = response.request.res.responseUrl;
        for (let i = 0; i < user.backgroundHistory.length; i++) {
          if (user.backgroundHistory[i].link === urlToSave) {
            return res.status(200).send( user.backgroundHistory);
          }
        }

        const background = {
          date: new Date(),
          link: urlToSave,
          favorite: false
        }

        // add background to user
        user.backgroundHistory.push(background);

        // max 365 backgrounds in history, deleting if there is more
        if (user.backgroundHistory.length > 365) {
          user.backgroundHistory.shift();
        }

        user.save((err, user) => {
          if (err) return res.status(500).send('Error while saving:', err);
          res.status(200).send(user.backgroundHistory);
        });

      });
  });
});

router.post('/saveToFavorites/:link', authCheck, (req, res) => {
  let indexOfChangedBackground = 0;
  const linkToSave = decodeURIComponent(req.params.link);
  User.findById(req.user._id, (error, user) => {
    if (error) {
      return res.status(400).send(error);
    }
    // find background that needs to be add as favorite
    for (let i = 0; i < user.backgroundHistory.length; i++) {
      if (user.backgroundHistory[i].link === linkToSave) {
        if (user.backgroundHistory[i].favorite) {
          user.backgroundHistory[i].favorite = false;
        } else {
          user.backgroundHistory[i].favorite = true;
        }
        indexOfChangedBackground = i;
      }
    }

    user.save((err, user) => {
      if (err) {
        console.error('err', err);
        return res.status(500).send('Error while updating:', err);
      }
      res.send({item: user.backgroundHistory[indexOfChangedBackground], index: indexOfChangedBackground});
    });
  });
});

router.get('/getBackgroundsInHistory', authCheck, (req, res) => {
  User.findById(req.user._id, (error, user) => {
    if (error) {
      return res.status(400).send(error);
    }

    return res.status(200).send(user.backgroundHistory);

  });
});

module.exports = router;
