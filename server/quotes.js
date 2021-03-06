const express = require('express');
const mongoose = require('mongoose');
const request = require('request');
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

router.post('/addQuote', authCheck, (req, res) => {
  User.findById(req.user._id, (error, user) => {
    if (error) {
      return res.status(400).send(error);
    }

    // check if todaysQuote is in storage already
    let quotes = user.quotes;
    const todaysQuote = quotes.filter(value => {
      return value.date === req.body.date;
    });

    if (todaysQuote.length === 0) {
      request('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', (error, response, body) => {
        if (error) {
          return res.status(400).send(error);
        };
        let quote =JSON.parse(body);
        // strip the p tag
        quote[0].content = quote[0].content.slice(3, quote[0].content.length - 5);

        const resQuote = {
          date: req.body.date,
          quote: quote[0],
          favorite: false
        };
        // add quote to user
        user.quotes.push(resQuote);

        user.save().then( () => {
          return res.send(resQuote);
        });
      })
    } else {
      return res.send(todaysQuote[0]);
    }
  });
})

router.post('/changeFavoriteQuote', authCheck, (req, res) => {
  User.findById(req.user._id, (error, user) => {
    if (error) {
      return res.status(400).send(error);
    };
    // find todays quote
    const quotes = user.quotes;
    const todaysQuote = quotes.filter(value => {
      return value.date === req.body.date;
    });

    // change favorite value
    const i = user.quotes.indexOf(todaysQuote[0]);
    user.quotes[i].favorite = !user.quotes[i].favorite;

    // save didnt work had to:
    user.markModified(`quotes`);

    //save user
    user.save(err => {
      if (err) {
        console.log(err);
      }
    }).then(() => {
      res.send(user.quotes[i].favorite);
    });
  });
})

router.get('/getQuotesAndFavorites', authCheck, (req, res) => {
  User.findById(req.user._id, (error, user) => {
    if (error) {
      return res.status(400).send(error);
    }

    const favorites = user.quotes.filter(item => {
      return item.favorite == true;
    });

    const response = {
      favorites,
      quotes: user.quotes
    }
    return res.send(response);
  });
})

router.post('/FindAndChangeFavorite', authCheck, (req, res) => {
  User.findById(req.user._id, (error, user) => {
    if (error) {
      return res.status(400).send(error);
    }

    const todaysQuote = user.quotes.filter(value => {
      return value.date === req.body.date;
    });

    // change favorite value
    const i = user.quotes.indexOf(todaysQuote[0]);
    user.quotes[i].favorite = !user.quotes[i].favorite;

    // save didnt work had to:
    user.markModified(`quotes`);

    //save user
    user.save(err => {
      if (err) {
        console.log(err);
      }
    }).then(() => {
      const Q = {
        fav: user.quotes[i].favorite,
        i
      }
      res.send(Q);
    });
  });
})

module.exports = router;
