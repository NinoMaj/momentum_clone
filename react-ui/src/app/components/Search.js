/* eslint linebreak-style: 0 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.context.router.push(`https://www.google.com/search?q=${this.state.search}`);
    window.location = `https://www.google.com/search?q=${this.state.search}`;
  }

  render() {
    return (
      <div className="searchStyle enter" id={this.props.widgets[0].Links ? "" : "searchNoLinks"}>
        <form onSubmit={this.handleSubmit}>
          <i
            className="fa fa-search"
            aria-hidden="true"
            onClick={this.handleSubmit}
            ></i>
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
            />
        </form>
      </div>
    );
  }
}

Search.contextTypes = {
  router: React.PropTypes.object.isRequired
};

Search.propTypes = {
  links: PropTypes.array,
  clicked: PropTypes.func,
  form: PropTypes.array,
  formAction: PropTypes.func,
  widgets: PropTypes.array
};

function mapStateToProps(state) {
  return {
    widgets: state.widgets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
