/* eslint linebreak-style: ["error", "windows"] */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

class MainFocus extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      text: this.props.mainFocus.text || '',
      editing: false
    });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleFocus() {
    this.setState({
      text: '',
      editing: true
    });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleClick() {
    this.props.deleteMainFocus();
    this.setState({
      text: '',
      editing: false
    });
  }

  handleCheckboxChange() {
    this.props.completeMainFocus(!this.props.mainFocus.completed);
  }

  handleSubmit(e) {
    const text = e.target.value.trim().slice(0, 40);
    const action = {
      text,
      completed: false
    };
    if (e.which === 13) {
      this.props.addMainFocus(action);
      this.setState({
        text,
        editing: false
      });
    }
  }

  render() {
    const mainFocusInput = classnames({
      mainFocusInput: true,
      mainFocusEditing: this.state.editing
    });
    const mainFocusSet = classnames({
      mainFocusSet: this.props.mainFocus.completed,
      mainFocusSetText: true
    });

    let element = null;
    if (this.props.mainFocus.text === '') {
      element = (
        <div>
          <h2 className="mainFocusTitle">What is your main focus for today?</h2>
          <input
            type="text"
            className={mainFocusInput}
            value={this.state.text}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
            onFocus={this.handleFocus}
            />
        </div>
      );
    } else {
      element = (
        <div className="viewFocus">
          <div className="toggleFocus">
            <input
              id="toggleFocus"
              type="checkbox"
              checked={this.props.mainFocus.completed}
              onChange={this.handleCheckboxChange}
              />
            <label htmlFor="toggleFocus" className={mainFocusSet}>{this.props.mainFocus.text}</label>
          </div>
          <button
            className="destroyMainFocusBtn"
            onClick={this.handleClick}
            >
            x
          </button>
        </div>
      );
    }
    return (
      <div className="mainFocusWrapper">
        {element}
      </div>
    );
  }
}

MainFocus.propTypes = {
  mainFocus: PropTypes.object.isRequired,
  addMainFocus: PropTypes.func.isRequired,
  completeMainFocus: PropTypes.func.isRequired,
  deleteMainFocus: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    mainFocus: state.mainFocus
  };
};

export default connect(mapStateToProps)(MainFocus);
