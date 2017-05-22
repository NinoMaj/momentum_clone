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
    const body = document.getElementsByTagName('body')[0];
    body.style.background = `url(${backgroundClicked}) no-repeat center center fixed`;
    body.style.position = 'relative';
    body.style.backgroundSize = 'cover';
  }

  render() {
    const backgroundsAll = this.props.background.backgrounds;
    let backgroundsToRender = [];
    if (this.props.active === 'Favorites') {
      // filter only favorite backgrounds
      backgroundsToRender = backgroundsAll.filter(item => {
        return item.favorite === true;
      });
    } else if (this.props.active === 'History') {
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
