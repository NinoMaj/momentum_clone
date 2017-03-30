/* eslint linebreak-style: ["error", "windows"] */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as LinksActions from '../actions/linksActions';
import LinkForm from '../components/LinkForm';
import ListItem from '../components/ListItem';

let cn = "";

class Links extends Component {
  constructor(props) {
    super(props);
    // handle binding this to functions
    this.handleClicked = this.handleClicked.bind(this);
    this.handlePlusClicked = this.handlePlusClicked.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClicked() {
    if (this.props.links[0].clicked) {
      const state = {
        clicked: false,
        plusClicked: false
      };
      this.props.clicked(state);
      const hover = {
        hover: false
      };
      this.props.formAction(hover);
      this.changeClass();
    } else {
      const state = {
        clicked: true,
        plusClicked: false
      };
      this.props.clicked(state);
      const hover = {
        hover: true
      };
      this.props.formAction(hover);
      this.changeClass();
    }
  }

  changeClass() {
    cn = this.props.form[0].hover === true ? "" : "SlideLinks";
    console.log(cn);
  }

  handlePlusClicked() {
    if (this.props.links[0].plusClicked) {
      const state = {
        clicked: true,
        plusClicked: false
      };
      this.props.clicked(state);
    } else {
      const state = {
        clicked: true,
        plusClicked: true
      };
      this.props.clicked(state);
    }
  }

  handleDelete(key) {
    let list = JSON.parse(localStorage.list);
    list = list.filter(obj => {
      return obj.key !== key;
    });
    localStorage.list = JSON.stringify(list);
    this.props.formAction(list);
  }

  render() {
    if (!localStorage.list) {
      localStorage.list = JSON.stringify([]);
    }

    const listAr = JSON.parse(localStorage.list);
    const listUlr = listAr.map(item => {
      const uri = `https://${item.url}`;
      return (
        <ListItem key={item.key} item={item} uri={uri} onItemClick={this.handleDelete}/>
      );
    });

    return (
      <div className="Links">
        <p onClick={this.handleClicked}>Links</p>
        {this.props.links[0].clicked ? <div className="linksBackground">
          <ul>
            <li><a href="">Chrome Tab</a><i onClick={this.handlePlusClicked} className="fa fa-plus" aria-hidden="true"></i></li>
            <li><a href="chrome://apps/">Apps</a></li>
            {listUlr}
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
  formAction: PropTypes.func
};

function mapStateToProps(state) {
  return {
    links: state.links,
    form: state.form
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({clicked: LinksActions.clicked, formAction: LinksActions.form}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Links);
