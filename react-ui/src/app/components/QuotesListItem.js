/* eslint linebreak-style: 0 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as QuoteActions from '../actions/quotesActions';

class QuotesListItem extends Component {
  constructor(props) {
    super(props);
    // handle binding this to functions
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <li className="QuotesListItem">{this.props.item.quote.content} <span id="author">{this.props.item.quote.title}</span> {this.props.item.favorite ? <i onClick={this.handleClick} className="fa fa-heart" aria-hidden="true"></i> : <i onClick={this.handleClick} className="fa fa-heart-o" aria-hidden="true"></i>}</li>
    );
  }

  handleClick() {
    this.props.favorite(this.props.item.date);
  }
}

QuotesListItem.propTypes = {
  item: PropTypes.object,
  favorite: PropTypes.func,
  quotes: PropTypes.array,
  setQuotes: PropTypes.func
};

function mapStateToProps(state) {
  return {
    quotes: state.quotesSettings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setQuotes: QuoteActions.settings}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuotesListItem);
