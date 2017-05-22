/* eslint linebreak-style: 0 */
import React, {Component} from 'react';
import BackgroundButton from '../components/BackgroundButton';
import BackgroundView from './BackgroundView';
// import BackgroundHistoryView from './BackgroundHistoryView';

class Background extends Component {
  constructor() {
    super();

    this.state = {
      active: 'Favorites'
    };

    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick(item) {
    this.setState({
      active: item
    });
  }

  render() {
    const tabs = ['Favorites', 'History'];
    return (
      <div className="background">
        <h2>Backgrounds</h2>
        <p>See a new inspiring photo each day</p>
        <br/>
        <ul>
          {
            tabs.map(item => {
              return (<BackgroundButton key={item} name={item} active={this.state.active} handleClick={this.onHandleClick}/>); // eslint-disable-line react/jsx-no-bind
            })
          }
        </ul>
        <div className="line-separator"></div>
        {this.state.active === 'Favorites' ?
          <BackgroundView active="Favorites"/> :
          <BackgroundView active="History"/>
        }
      </div>
    );
  }
}

export default Background;
