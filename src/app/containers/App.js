/* eslint linebreak-style: ["error", "windows"] */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import MainFocus from './MainFocus';
import classnames from 'classnames';
import * as TodoActions from '../actions/index';
import * as MainFocusActions from '../actions/mainFocus_actions';
import Quotes from './Quotes';
import Clock from '../components/Clock';
import Weather from '../components/Weather';
import Search from '../components/Search';
import Links from './Links';

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
        <Links/>
        <Clock/>
        <Search/>
        <Weather/>
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
        <MainFocus
          mainFocus={this.props.mainFocus}
          addMainFocus={actions.addMainFocus}
          completeMainFocus={actions.completeMainFocus}
          deleteMainFocus={actions.deleteMainFocus}
          />
        <Quotes/>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  mainFocus: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    mainFocus: state.mainFocus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, TodoActions, MainFocusActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
