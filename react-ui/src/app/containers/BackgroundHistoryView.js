/* eslint linebreak-style: 0 */
import React, {Component} from 'react';
import axios from 'axios';

class BackgroundHistoryView extends Component {
  // constructor() {
  //   super();
  // };
  componentDidMount() {
    axios.get('https://source.unsplash.com/category/nature/daily')
      .then(response => {
        console.log(response.request.responseURL);
        document.getElementsByTagName("HTML")[0].style.background = `url(${response.request.responseURL}) no-repeat center center fixed`;
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        History
      </div>
    );
  }
}

export default BackgroundHistoryView;
