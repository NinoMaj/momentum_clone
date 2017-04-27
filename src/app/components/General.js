/* eslint linebreak-style: 0 */
import React, {Component} from 'react';
import ToggleSwitch from '@trendmicro/react-toggle-switch';

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div className="general">
        <h4>Widgets</h4>
        <ul>
          <li>Links <ToggleSwitch checked={this.state.checked} size="small" onChange={this.handleChange}/></li>
          <li>Search</li>
          <li>Weather</li>
          <li>Focus</li>
          <li>Quotes</li>
          <li>Todo's</li>
        </ul>
      </div>
    );
  }
}

export default General;
