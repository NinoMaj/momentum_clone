/* eslint linebreak-style: 0 */
import React, {Component, PropTypes} from 'react';
import ToggleSwitch from '@trendmicro/react-toggle-switch';

class WidgetList extends Component {
  constructor(props) {
    super(props);
    // handle binding this to functions
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <li>{this.props.item} <ToggleSwitch className="switch" checked={this.props.widget} size="small" onChange={this.handleChange}/></li>
    );
  }

  handleChange() {
    this.props.onItemClick(this.props.i);
  }
}

WidgetList.propTypes = {
  widget: PropTypes.bool,
  item: PropTypes.string,
  onItemClick: PropTypes.func,
  i: PropTypes.number
};

export default WidgetList;
