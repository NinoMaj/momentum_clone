/* eslint linebreak-style: 0 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as LinksActions from '../actions/linksActions';
import LinkForm from '../components/LinkForm';
import ListItem from '../components/ListItem';
import Search from '../components/Search';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from 'axios';

class Links extends Component {
  constructor(props) {
    super(props);
    // handle binding this to functions
    this.handleClicked = this.handleClicked.bind(this);
    this.handlePlusClicked = this.handlePlusClicked.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.getLinks();
  }

  getLinks() {
    axios.get('links/getLinks')
    .then(res => {
      const listAr = res.data;
      const state = this.props.links[0];
      state.list = listAr;
      this.props.formAction(state);
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleDelete(key) {
    axios.post('links/removeLink', {key})
    .then(res => {
      const state = this.props.links[0];
      state.list = res.data;
      this.props.formAction(state);
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleClicked() {
    if (this.props.links[0].clicked) {
      const state = {
        clicked: false,
        plusClicked: false,
        list: this.props.links[0].list
      };
      this.props.formAction(state);
    } else {
      const state = {
        clicked: true,
        plusClicked: false,
        list: this.props.links[0].list
      };
      this.props.formAction(state);
    }
  }

  handlePlusClicked() {
    if (this.props.links[0].plusClicked) {
      const state = {
        clicked: true,
        plusClicked: false,
        list: this.props.links[0].list
      };
      this.props.formAction(state);
    } else {
      const state = {
        clicked: true,
        plusClicked: true,
        list: this.props.links[0].list
      };
      this.props.formAction(state);
    }
  }

  render() {
    const listAr = this.props.links[0].list;
    const listUlr = listAr.map(item => {
      const uri = `https://${item.url}`;
      return (
        <ListItem key={item._id} item={item} uri={uri} onItemClick={this.handleDelete}/>
      );
    });
    return (
      <div className="Links">
        {this.props.widgets[0].Links ? <div>{this.props.links[0].clicked ? <p className="LinksClicked enter" onClick={this.handleClicked}>Links</p> : <p id="LinksUnclicked" className="enter" onClick={this.handleClicked}>Links</p>}</div> : <p></p>}
        {this.props.widgets[0].Search ? <Search/> : <p></p>}
        {this.props.links[0].clicked ? <div className={this.props.links[0].clicked ? 'linksBackground enter' : ''}>
          <ul>
            <li><a href=""><span className="fa fa-chrome" aria-hidden="true"></span> Chrome Tab</a><i onClick={this.handlePlusClicked} className="fa fa-plus" aria-hidden="true"></i></li>
            <li><a href="chrome://apps/"><span className="fa fa-th" aria-hidden="true"></span>  Apps</a></li>
            <CSSTransitionGroup transitionName="linksItem" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
              {listUlr}
            </CSSTransitionGroup>
          </ul>
          {this.props.links[0].plusClicked ? <div>
            <LinkForm/>
          </div> : <p></p>}
        </div> : <p></p>}
      </div>
    );
  }
}

Links.propTypes = {
  links: PropTypes.array,
  clicked: PropTypes.func,
  form: PropTypes.array,
  formAction: PropTypes.func,
  widgets: PropTypes.array
};

function mapStateToProps(state) {
  return {
    links: state.links,
    form: state.form,
    widgets: state.widgets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({clicked: LinksActions.clicked, formAction: LinksActions.form}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Links);
