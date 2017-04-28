/* eslint linebreak-style: 0 */
import React, {Component, PropTypes} from 'react';
import WidgetList from './WidgetList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as LinksActions from '../actions/linksActions';

const widgets = ['Links', 'Search', 'Weather', 'Focus', 'Quotes', 'Todo'];

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(i) {
    const state = this.props.widgets[0];
    state[widgets[i]] = !state[widgets[i]];
    this.props.widgetsAction(state);
  }

  render() {
    const wid = widgets.map(item => {
      return (
        <WidgetList key={widgets.indexOf(item)} item={item} i={widgets.indexOf(item)} onItemClick={this.handleChange} widget={this.props.widgets[0][item]}/>
      );
    });
    return (
      <div className="general">
        <h4>Widgets</h4>
        <ul>
          {wid}
        </ul>
      </div>
    );
  }
}

General.propTypes = {
  widgets: PropTypes.array,
  clicked: PropTypes.func,
  widgetsAction: PropTypes.func
};

function mapStateToProps(state) {
  return {
    widgets: state.widgets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({widgetsAction: LinksActions.widgets, clicked: LinksActions.clicked}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(General);
