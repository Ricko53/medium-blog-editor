import React, { Component, PropTypes } from 'react';

import './style.scss'

let winWidth = window.innerWidth

class ImageScale extends Component {
  static propTypes = {
    image: PropTypes.object,
    paragraphName: PropTypes.number,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      ratio: false
    }

    this.scaleImage = this.scaleImage.bind(this)
  }

  componentDidMount() {
    let imgWidth = parseInt(this.refs.imageDom.width)
    let imgHeight = parseInt(this.refs.imageDom.height)

    this.setState({
      ratio: imgHeight/imgWidth
    })
  }

  scaleImage() {
    this.context.actions.changeImageScale(this.props.paragraphName, !this.props.image.fullScreen)
  }

  render() {
    console.debug('imageScale render')
    
    let props = this.props;
    let states = this.state;
    let width = props.image.fullScreen ? winWidth : winWidth * 0.6
    let boxStyle = {
      height: states.ratio ? width * states.ratio : 'auto',
    };

    return (
      <div className="scale-box" style={boxStyle} onClick={this.scaleImage}>
        <img ref="imageDom" className={props.image.fullScreen ? "sacle-image full-image" : "sacle-image"} src={props.image.url} />
      </div>
    );
  }
}

ImageScale.contextTypes = {
  actions: PropTypes.object
}

export default ImageScale