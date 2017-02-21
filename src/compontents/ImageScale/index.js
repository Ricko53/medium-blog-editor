import React, { Component, PropTypes } from 'react';

import './style.scss'

class ImageScale extends Component {
  static propTypes = {
    url: PropTypes.string,
  };

  render() {
    return (
      <img className="sacle-image" src={this.props.url} />
    );
  }
}

export default ImageScale