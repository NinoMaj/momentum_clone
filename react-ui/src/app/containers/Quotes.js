/* eslint linebreak-style: 0 */
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

    if (localStorage.token) {
      axios.post('http://localhost:5000/quotesAndWaether/addQuote', {date})
      .then(res => {
        console.log(res);
        // set state
        const state = {
          date,
          quote: res.data[0].quote.content,
          author: res.data[0].quote.title,
          emptyHeart: false
        };
        this.props.getRandomQoute(state);
      }).catch(error => {
        console.log(error);
      });
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
