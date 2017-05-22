/* eslint linebreak-style: 0 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import BackgroundImageItem from '../components/BackgroundImageItem';
import * as BackgroundActions from '../actions/background_actions';

class BackgroundView extends Component {

  handleHeartClick(clickedBackground) {
    this.props.actions.saveBackgroundAsync(clickedBackground);
  }

  backgroundClicked(backgroundClicked) {
    console.log(backgroundClicked);
    const body = document.getElementsByTagName('body')[0];
    body.style.background = `url(${backgroundClicked}) no-repeat center center fixed`;
    body.style.position = 'relative';
    body.style.backgroundSize = 'cover';
    body.style.height = '100%';
    setTimeout(() => {
      document.getElementsByTagName('html')[0].style.background = `url(${backgroundClicked}) no-repeat center center fixed !important`;
    }, 4000);

  //     background: url("https://source.unsplash.com/category/nature") no-repeat center center fixed;
  // -webkit-background-size: cover;
  // -moz-background-size: cover;
  // -o-background-size: cover;
  // background-size: cover;
  // height: 100%;
  }

  render() {
    const backgroundsAll = this.props.background.backgrounds;
    console.log('vani', this.props.active);
    let backgroundsToRender = [];
    if (this.props.active === 'Favorites') {
      console.log('fao');
      // filter only favorite backgrounds
      backgroundsToRender = backgroundsAll.filter(item => {
        return item.favorite === true;
      });
    } else if (this.props.active === 'History') {
      console.log('his');
      // reverse and take only last 21 backgrounds
      backgroundsToRender = [...backgroundsAll].reverse().slice(0, 21);
    }
    return (
      <div className="backgroundHistoryViewContainer">
        {backgroundsToRender.length > 0 ?
          backgroundsToRender.map(image =>
            <BackgroundImageItem
              key={image.link}
              image={image}
              onHeartClicked={clickedBackground => this.handleHeartClick(clickedBackground)} // eslint-disable-line react/jsx-no-bind
              onBackgroundClicked={backgroundClicked => this.backgroundClicked(backgroundClicked)} // eslint-disable-line react/jsx-no-bind
              />
          ) :
          'Loading...'
        }
      </div>
    );
  }
}

BackgroundView.propTypes = {
  actions: PropTypes.object.isRequired,
  background: PropTypes.object,
  active: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    background: state.background
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign({}, BackgroundActions), dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundView);
