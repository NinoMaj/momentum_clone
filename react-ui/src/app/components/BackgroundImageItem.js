import React, {PropTypes} from 'react';

const BackgroundImageItem = props => {
  function handleHeartClicked() {
    props.onHeartClicked(props.image.link);
  }

  function handleBackgroundClicked() {
    props.onBackgroundClicked(props.image.link);
  }

  const favoriteHeart = props.image.favorite ?
    <i onClick={handleHeartClicked} className="fa fa-heart" aria-hidden="true"></i> :
    <i onClick={handleHeartClicked} className="fa fa-heart-o" aria-hidden="true"></i>;

  return (
    <div className="backgroundImageItem">
      <img src={props.image.link} width="54px" height="54px" onClick={handleBackgroundClicked}/>
      <div className="heartInBackgroundHistory">
        {favoriteHeart}
      </div>
    </div>
  );
};

BackgroundImageItem.propTypes = {
  image: PropTypes.string,
  onHeartClicked: PropTypes.func.isRequired,
  onBackgroundClicked: PropTypes.func.isRequired
};

export default BackgroundImageItem;
