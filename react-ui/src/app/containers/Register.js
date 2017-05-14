/* eslint linebreak-style: 0 */
import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as LinksActions from '../actions/linksActions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.value;
    axios.post('register', {name})
    .then(response => {
      localStorage.token = JSON.stringify(response.data);
      const state = {
        token: true
      };
      this.props.token(state);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="register">
        <div className="regForm">
          <h2 className="mainFocusTitle">What's your name?</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" className="mainFocusInput" value={this.state.value} name="value" onChange={this.handleChange}/>
            <input id="hiddenSubmit" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  token: PropTypes.func,
  tokens: PropTypes.array
};

function mapStateToProps(state) {
  return {
    tokens: state.token
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({token: LinksActions.token}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
