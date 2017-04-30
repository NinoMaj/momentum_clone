/* eslint linebreak-style: 0 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as LinksActions from '../actions/linksActions';
import axios from 'axios';

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
    const listItem = {
      title: this.state.value,
      url: this.state.value1
    };
    axios.post('http://localhost:5000/links/addLink', {listItem})
    .then(res => {
      const state = this.props.links[0];
      state.plusClicked = false;
      state.list.push(res.data);
      this.setState({value: '', value1: ''});
      this.props.form(state);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <form className="linksForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" value={this.state.value} name="value" onChange={this.handleChange}/>
        <input type="text" placeholder="Adress" value={this.state.value1} name="value1" onChange={this.handleChange}/>
        <input id="hiddenSubmit" type="submit" value="Submit"/>
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
  form: PropTypes.func,
  links: PropTypes.array
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({form: LinksActions.form}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkForm);
