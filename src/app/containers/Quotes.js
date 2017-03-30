/* eslint linebreak-style: ["error", "windows"] */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as QuoteActions from '../actions/quotesActions';
import axios from 'axios';
const sanitizeHtml = require('sanitize-html');

// varibles for classNames, for animations
let cn;
let cn1 = "";

class Quotes extends Component {
  constructor(props) {
    super(props);
    // handle binding this to functions
    this.handleTwitterClicked = this.handleTwitterClicked.bind(this);
    this.handleHeartClicked = this.handleHeartClicked.bind(this);
    this.handleMouseOverQuote = this.handleMouseOverQuote.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.changeClass = this.changeClass.bind(this);
  }

  getRandomQoute() {
    // get date
    let date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    date = `${dd}.${mm}.${yyyy}`;

    // if localStorage has no quotes at all,
    // initiate an empty arrays for quotes and favoriteQuotes
    if (!localStorage.quotes) {
      localStorage.quotes = JSON.stringify([]);
      localStorage.favoriteQuotes = JSON.stringify([]);
      localStorage.list = JSON.stringify([]);
    }

    // check if todaysQuote is in storage already
    let quotes = localStorage.quotes;
    quotes = JSON.parse(quotes);
    const todaysQuote = quotes.filter(value => {
      return value.date === date;
    });

     // if it isn't fatch from API, save to storage and set to state
    if (todaysQuote.length === 0) {
      // get random quote
      axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
      .then(quote => {
        // strip the p tag
        quote.data[0].content = quote.data[0].content.slice(3, quote.data[0].content.length - 5);
        // save to localStorage
        let quotes = localStorage.quotes;
        quotes = JSON.parse(quotes);
        quotes.push({
          date,
          quote: quote.data[0]
        });
        localStorage.quotes = JSON.stringify(quotes);

        // set state
        const state = {
          date,
          quote: quote.data[0].content,
          author: quote.data[0].title,
          emptyHeart: false
        };
        this.props.getRandomQoute(state);
      });
    } else {  // if you do not fetch it just set it from localStorage.quotes
      // check if todaysQuote is in the favorites, color heart aprorietly
      let heart;
      const favorite = JSON.parse(localStorage.favoriteQuotes);
      const todaysFavorite = favorite.filter(value => {
        return value.quote === todaysQuote[0].quote.content;
      });
      if (todaysFavorite.length === 0) {
        heart = true;
      } else {
        heart = false;
      }
      const state = {
        date,
        quote: todaysQuote[0].quote.content,
        author: todaysQuote[0].quote.title,
        emptyHeart: heart
      };
      this.props.getRandomQoute(state);
    }
  }

  // add to favorites and change the heart color
  handleHeartClicked() {
    if (this.props.quotes[0].emptyHeart) {// add qoute to favorites
      const favorites = JSON.parse(localStorage.favoriteQuotes);
      favorites.push(this.props.quotes[0]);
      localStorage.favoriteQuotes = JSON.stringify(favorites);

      // change a heart color
      const state = {
        date: this.props.quotes[0].date,
        quote: this.props.quotes[0].quote,
        author: this.props.quotes[0].author,
        emptyHeart: false
      };
      this.props.getRandomQoute(state);
    } else { // remove quote form favorites
      let favorites = localStorage.favoriteQuotes;
      favorites = JSON.parse(favorites);
      const date = this.props.quotes[0].date;
      favorites = favorites.filter(obj => {
        return obj.date !== date;
      });
      localStorage.favoriteQuotes = JSON.stringify(favorites);

      // change a heart color
      const state = {
        date: this.props.quotes[0].date,
        quote: this.props.quotes[0].quote,
        author: this.props.quotes[0].author,
        emptyHeart: true
      };
      this.props.getRandomQoute(state);
    }
  }

  // generate link, and redirect to it
  handleTwitterClicked() {
    const quote = `"${this.props.quotes[0].quote}" --${this.props.quotes[0].author} via @BlueWhales momentum_clone`;
    const uri = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(uri);
  }

  // Haande Animations
  // set correct class
  handleMouseOverQuote() {
    const state = {
      hover: true
    };
    this.props.changeHover(state);
    this.changeClass();
  }

  // delet the class on mouse out
  handleMouseOut() {
    const state = {
      hover: false
    };
    this.props.changeHover(state);
    this.changeClass();
  }

  // add animation classes to prpoer elements
  changeClass() {
    cn = this.props.hover[0].hover === true ? "" : "Slide";
    cn1 = this.props.hover[0].hover === true ? "" : "AnimationTwo";
  }

  componentDidMount() {
    this.getRandomQoute();
  }

  render() {
    // convert quote to normal text not encoded html
    const cleanHtml = sanitizeHtml(this.props.quotes[0].quote, {
      exclusiveFilter(frame) {
        return frame.tag === 'p' && !frame.text.trim();
      }
    });

    return (
      <div className={`Quotes ${cn}`} onMouseOver={this.handleMouseOverQuote} onMouseOut={this.handleMouseOut}><strong>{cleanHtml}</strong>
        <p className={`Author ${cn1}`}>{this.props.quotes[0].author}<span> </span>
        {this.props.quotes[0].emptyHeart ? <i onClick={this.handleHeartClicked} className="fa fa-heart-o" aria-hidden="true"></i> :
          <i onClick={this.handleHeartClicked} className="fa fa-heart" aria-hidden="true"></i>}
          <span> </span><i onClick={this.handleTwitterClicked} className="fa fa-twitter" aria-hidden="true"></i></p>
      </div>
    );
  }
}

Quotes.propTypes = {
  date: PropTypes.string,
  quote: PropTypes.string,
  author: PropTypes.string,
  emptyHeart: PropTypes.bool,
  getRandomQoute: PropTypes.func,
  quotes: PropTypes.array,
  changeHeart: PropTypes.func,
  hover: PropTypes.array,
  heart: PropTypes.array,
  changeHover: PropTypes.func,
  chagneHeart: PropTypes.func
};

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
    hover: state.hover
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getRandomQoute: QuoteActions.getRandomQoute,
    changeHover: QuoteActions.changeHover}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quotes);
