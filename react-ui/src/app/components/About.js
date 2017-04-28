/* eslint linebreak-style: 0 */
import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h3>This is a clone of <a href="https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca">Momentum</a></h3>
        <h3>App was mady by <br></br> <span>Blue Whales Team</span></h3>
        <a href="https://github.com/NinoMaj/momentum_clone"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
      </div>
    );
  }
}

export default About;
