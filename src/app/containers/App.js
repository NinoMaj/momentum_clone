import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/index';
import Quotes from './Quotes';

let xhr;

class App extends Component {
  componentDidMount() {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ipinfo.io/json', true);
    xhr.send();

    xhr.addEventListener('loadend', this.getBackground, false);
  }
  getBackground() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
      // this.setState({
      // });
    }
  }

  render() {
    const {todos, actions} = this.props;
    return (
      <div>
        <div>
          <Header
            addTodo={actions.addTodo}
            />
          <MainSection
            todos={todos}
            actions={actions}
            />
        </div>
        <Quotes/>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
