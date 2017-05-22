/* eslint linebreak-style: 0 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import MainFocus from './MainFocus';
import classnames from 'classnames';
import * as TodoActions from '../actions/index';
import * as MainFocusActions from '../actions/mainFocus_actions';
import * as BackgroundActions from '../actions/background_actions';
import Quotes from './Quotes';
import Clock from '../components/Clock';
import Weather from '../components/Weather';
import Links from './Links';
import Settings from './Settings';
import Register from './Register';
import '@trendmicro/react-toggle-switch/dist/react-toggle-switch.css';
import axios from 'axios';

if (localStorage.token) {
  axios.defaults.headers.common.Authorization = localStorage.token;
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      todosOpen: false
    };
    this.handleOpenOrCloseTodos = this.handleOpenOrCloseTodos.bind(this);
  }

  componentDidMount() {
    this.storeBackgroundInHistory();
  }

  storeBackgroundInHistory() {
    // axios.post('/background/addBackgroundHistory')
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    this.props.actions.addBackgroundAsync();
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
        <Settings/>
        <Links/>
        {this.props.token[0].token ? <p></p> : <Register/>}
        {this.props.widgets[0].Weather ? <Weather/> : <p></p>}
        {this.props.widgets[0].Todo ? <div className={`enter ${todosOpenPressed}`} onClick={this.handleOpenOrCloseTodos}>Todo</div> : <p></p>}
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

        {this.props.widgets[0].Focus ? <MainFocus
          mainFocus={this.props.mainFocus}
          addMainFocus={actions.addMainFocus}
          completeMainFocus={actions.completeMainFocus}
          deleteMainFocus={actions.deleteMainFocus}
          /> : <p></p>}
        <Clock/>
        {this.props.widgets[0].Quotes ? <Quotes/> : <p></p>}

      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  mainFocus: PropTypes.object.isRequired,
  widgets: PropTypes.array,
  token: PropTypes.array
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    mainFocus: state.mainFocus,
    widgets: state.widgets,
    token: state.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, TodoActions, MainFocusActions, BackgroundActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
