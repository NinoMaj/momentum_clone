/* eslint linebreak-style: 0 */
import React, {Component} from 'react';
import About from '../components/About';
import Help from '../components/Help';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false, rightSide: 'general'};

    this.handleClicked = this.handleClicked.bind(this);
    this.handleChoose = this.handleChoose.bind(this);
  }

  handleClicked() {
    if (this.state.show) {
      this.setState({show: false, rightSide: 'general'});
    } else {
      this.setState({show: true, rightSide: 'general'});
    }
  }

  handleChoose(e) {
    this.setState({show: true, rightSide: e.target.id});
  }

  render() {
    const rs = this.state.rightSide;
    let rightSide = null;
    if (rs === 'general') {
      rightSide = <general/>;
    } else if (rs === 'todo') {
      rightSide = <p>todo</p>;
    } else if (rs === 'background') {
      rightSide = <p>background</p>;
    } else if (rs === 'quotes') {
      rightSide = <p>quotes</p>;
    } else if (rs === 'help') {
      rightSide = <Help/>;
    } else if (rs === 'about') {
      rightSide = <About/>;
    }

    return (
      <div className="settings">
        {this.state.show ? <div className="settingsPage">
          <div className="settingsLeft">
            <h3 onClick={this.handleChoose} id="general">General</h3>
            <h3 onClick={this.handleChoose} id="todo">Todo</h3>
            <h3 onClick={this.handleChoose} id="background">Background</h3>
            <h3 onClick={this.handleChoose} id="quotes">Quotes</h3>
            <br/>
            <h4 onClick={this.handleChoose} id="help">Help</h4>
            <h4 onClick={this.handleChoose} id="about">About</h4>
          </div>
          <div className="settingsRight">
            {rightSide}
          </div>
        </div> : <p></p>}
        <i onClick={this.handleClicked} className="fa fa-cog fa-3x" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Settings;
