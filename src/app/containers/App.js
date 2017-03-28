import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import classnames from 'classnames';
import * as TodoActions from '../actions/index';
import Quotes from './Quotes';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todosOpen: false
    };
    this.handleOpenOrCloseTodos = this.handleOpenOrCloseTodos.bind(this);
  }

  handleOpenOrCloseTodos() {
    this.setState({
      todosOpen: !this.state.todosOpen
    });
  }

  render() {
    const {todos, actions} = this.props;
    const todosOpenPressed = classnames({
      openTodoLink: true,
      todosOpenPressed: this.state.todosOpen
    });
    return (
      <div>
        <div className={todosOpenPressed} onClick={this.handleOpenOrCloseTodos}>todos</div>
        {this.state.todosOpen === true && (
          <div className="todoContainer">
            <Header
              addTodo={actions.addTodo}
              />
            <MainSection
              todos={todos}
              actions={actions}
              />
          </div>
          )}
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
