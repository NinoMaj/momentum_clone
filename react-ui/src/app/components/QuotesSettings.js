/* eslint linebreak-style: 0 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import QuotesListItem from './QuotesListItem';
import * as QuoteActions from '../actions/quotesActions';

let Quotel = [];
let fav = [];

class QuotesSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {history: true};
    // handle binding this to functions
    this.handleHistoryClick = this.handleHistoryClick.bind(this);
    this.handleFavoritesClick = this.handleFavoritesClick.bind(this);
    this.favoriteChange = this.favoriteChange.bind(this);
  }

  componentDidMount() {
    this.getQuotesAndFavorites();
  }

  getQuotesAndFavorites() {
    // get quote history
    axios.get('quotes/getQuotesAndFavorites')
    .then(res => {
      const state = this.props.quotes[0];
      state.quotes = res.data.quotes;
      state.favorites = res.data.favorites;
      this.props.setQuotes(state);
      Quotel = state.quotes;
      fav = state.favorites;
    })
    .catch(error => {
      console.log(error);
    });
  }

  favoriteChange(key) {
    // get date
    let Today = new Date();
    const dd = Today.getDate();
    const mm = Today.getMonth() + 1;
    const yyyy = Today.getFullYear();
    Today = `${dd}.${mm}.${yyyy}`;

    const date = key;
    axios.post('quotes/FindAndChangeFavorite', {date})
    .then(res => {
      const state = this.props.quotes[0];
      state.quotes[res.data.i].favorite = res.data.fav;
      const fav = state.favorites.filter(item => {
        if (item.date === date) {
          item.favorite = !item.favorite;
        }
        return item;
      });
      state.favorites = fav;
      this.props.setQuotes(state);
      this.getQuotesAndFavorites();
    })
    .catch(error => {
      console.log(error);
    });

    if (date === Today) {
      const todays = this.props.todayQuote[0];
      todays.emptyHeart = !todays.emptyHeart;
      this.props.getRandomQoute(todays);
    }
  }

  handleHistoryClick() {
    this.setState({history: true});
  }

  handleFavoritesClick() {
    this.setState({history: false});
  }

  render() {
    const listQ = Quotel.map(item => {
      return <QuotesListItem key={item.date} item={item} favorite={this.favoriteChange}/>;
    });
    const favorites = fav.map(item => {
      return <QuotesListItem key={item.date} item={item} favorite={this.favoriteChange}/>;
    });
    return (
      <div className="QuotesSettings enter">
        <div className="topBar">
          <h3> <span id="leftSpan" onClick={this.handleFavoritesClick}>Favorites</span> <span id="rightSpan" onClick={this.handleHistoryClick}>History</span></h3>
        </div>
        {this.state.history ? <div className="quotesHistory">
          {listQ}
        </div> : <div className="quotesFavorites">
          {favorites}
        </div>}
      </div>
    );
  }
}

QuotesSettings.propTypes = {
  quotes: PropTypes.array,
  todayQuote: PropTypes.array,
  setQuotes: PropTypes.func,
  getRandomQoute: PropTypes.func
};

function mapStateToProps(state) {
  return {
    quotes: state.quotesSettings,
    todayQuote: state.quotes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setQuotes: QuoteActions.settings, getRandomQoute: QuoteActions.getRandomQoute}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuotesSettings);
