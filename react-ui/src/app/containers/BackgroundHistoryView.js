/* eslint linebreak-style: 0 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import axios from 'axios';
import BackgroundImageItem from '../components/BackgroundImageItem';
import * as BackgroundActions from '../actions/background_actions';

class BackgroundHistoryView extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     images: undefined
  //   };
  // }

  componentDidMount() {
    // this.props.getBackgroundsAsync();
    // axios.get('/background/getBackgroundsInHistory')
    //   .then(response => {
    //     this.setState({
    //       images: response.data
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  handleHeartClick(clickedBackground) {
    this.props.actions.saveBackgroundAsync(clickedBackground);
    // encode link, otherwise it is not possible to pass as params
    // clickedBackground = encodeURIComponent(clickedBackground);
    // axios.post(`/background/saveToFavorites`, {
    //   link: clickedBackground
    // })
    //   .then(response => {
    //     console.log(response);
    //     this.setState({
    //       images: response.data
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  render() {
    const backgrounds = this.props.background.backgrounds;
    const reveresedAndCutBackgrounds = [...backgrounds].reverse().slice(0, 21);
    return (
      <div className="backgroundHistoryViewContainer">
        {reveresedAndCutBackgrounds.length > 0 ?
          reveresedAndCutBackgrounds.map(image =>
            <BackgroundImageItem
              key={image.link}
              image={image}
              onHeartClicked={clickedBackground => this.handleHeartClick(clickedBackground)} // eslint-disable-line react/jsx-no-bind
              />
          ) :
          'Loading...'
        }
      </div>
    );
  }
}

BackgroundHistoryView.propTypes = {
  actions: PropTypes.object.isRequired,
  background: PropTypes.object
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

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundHistoryView);
// export default BackgroundHistoryView;
