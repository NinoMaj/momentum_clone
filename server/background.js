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
  console.log('on server - add back to H');
  User.findById(req.user._id, (error, user) => {
    if (error) {
      return res.status(400).send(error);
    }
    axios.get('https://source.unsplash.com/category/nature')
      .then(response => {
        // console.log(Object.keys(response));
        // console.log(Object.keys(response.request));
        // console.log(typeof response.data);
        console.log('new background link to add', response.request._currentUrl);
        for (let i = 0; i < user.backgroundHistory.length; i++) {
          if (user.backgroundHistory[i].link === response.request._currentUrl) {
            return res.status(200).send('Background already in history');
          }
        }

        const background = {
          date: new Date(),
          link: response.request._currentUrl,
          favorite: false
        }

        // add background to user
        user.backgroundHistory.push(background);

        // max 365 backgrounds in history, deleting if there is more
        if (user.backgroundHistory.length > 365) {
          user.backgroundHistory.shift();
        }
        
        //save in DB
        // user.save()
        //   .then( () => {
        //     return res.status(200).send('Background save in users history:', background);
        //   })
        //   .catch(error => {
        //     console.log(error);
        //     return res.status(500).send('Error while saving:', err);
        //   });
        user.save((err, user) => {
          if (err) return res.status(500).send('Error while saving:', err);
          res.send(user.backgroundHistory);
        });

      });
  });
});

router.post('/saveToFavorites/:link', authCheck, (req, res) => {
  console.log('on server - save Fav');
  let indexOfChangedBackground = 0;
  const linkToSave = decodeURIComponent(req.params.link);
  // console.log('lts', linkToSave);
  // console.log(req.body.background);
  // console.log(req.body);
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
        console.log('fav:', user.backgroundHistory[i], 'index:', i);
        indexOfChangedBackground = i;
      }
    }
    
    user.save((err, user) => {
      if (err) {
        console.log('err', err);
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
    
    // let imagesUrl = [];
    // for (let i = 0; i < user.backgroundHistory.length; i++) {
    //   imagesUrl.push({
    //     link: user.backgroundHistory[i].link,
    //     favorite: user.backgroundHistory[i].favorite
    //   });
    // }

    return res.status(200).send(user.backgroundHistory);
    
  });
});


module.exports = router;
