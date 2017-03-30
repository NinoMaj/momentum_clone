/* eslint linebreak-style: ["error", "windows"] */
import React, {Component, PropTypes} from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    // handle binding this to functions
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <li><a href={this.props.uri}>{this.props.item.title}</a><i onClick={this.handleClick} className="fa fa-times" aria-hidden="true"></i></li>
    );
  }

  handleClick() {
    this.props.onItemClick(this.props.item.key);
  }
}

ListItem.propTypes = {
  uri: PropTypes.string,
  item: PropTypes.object,
  onItemClick: PropTypes.func
};

export default ListItem;
