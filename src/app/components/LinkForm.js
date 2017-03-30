/* eslint linebreak-style: ["error", "windows"] */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as LinksActions from '../actions/linksActions';

class LinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', value1: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const state = {
      hover: true
    };
    this.props.form(state);
    const ar = JSON.parse(localStorage.list);
    state.key = ar.length + 1;
    ar.push(state);
    localStorage.list = JSON.stringify(ar);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} name="value" onChange={this.handleChange}/>
        <input type="text" value={this.state.value1} name="value1" onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    links: state.links
  };
}

LinkForm.propTypes = {
  form: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({form: LinksActions.form}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkForm);
