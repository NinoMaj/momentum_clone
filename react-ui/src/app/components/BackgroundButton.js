/* eslint linebreak-style: 0 */

import React from 'react';

const BackgroundButton = props => {
  const handleClick = name => {
    props.handleClick(name);
  };
  if (props.name === props.active) {
    return (<li className="active" onClick={() => handleClick(props.name)}>{props.name}</li>); // eslint-disable-line react/jsx-no-bind
  }
  return (<li onClick={() => handleClick(props.name)}>{props.name}</li>);// eslint-disable-line react/jsx-no-bind
};

BackgroundButton.propTypes = {
  name: React.PropTypes.string.isRequired,
  active: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default BackgroundButton;
