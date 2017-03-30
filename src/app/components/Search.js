/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

class Search extends React.Component {
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
      <div className="searchStyle">
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

export default Search;
