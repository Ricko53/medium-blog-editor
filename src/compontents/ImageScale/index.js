import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';

import './style.scss'

let winWidth = window.innerWidth
let defaultHeight = 600
const springConfig = {stiffness: 300, damping: 30};

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
    this.getImageRatio = this.getImageRatio.bind(this)
  }

  componentDidMount() {
    let ratio = this.getImageRatio()
    this.context.actions.setImageRatio(this.props.paragraphName, ratio)
  }

  shouldComponentUpdate(nextprops, nextstate) {
    return true
    // return false
  }

  componentWillReceiveProps(nextprops, nextContext) {
  }

  getImageRatio() {
    console.log(this.imageDom)
    let imgWidth = parseInt(this.imageDom.width)
    let imgHeight = parseInt(this.imageDom.height)

    let ratio = imgHeight/imgWidth
    defaultHeight = winWidth * 0.6 * ratio

    return ratio
  }

  scaleImage() {
    this.context.actions.changeImageScale(this.props.paragraphName, !this.props.image.fullScreen)
  }

  render() {
    console.debug('imageScale render')

    const { image } = this.props;
    let width = image.fullScreen ? winWidth : winWidth * 0.6
    let boxStyle = {
      width: spring(width, springConfig),
      height: image.ratio ? spring( width * image.ratio, springConfig) : defaultHeight,
    }

    return (
      <Motion style={boxStyle}>
      { (pos) => 
        <div className="scale-box" 
          style={{
            width: pos.width,
            height: pos.height
          }}
          onClick={this.scaleImage}>
          <img ref={(imageDom) => { this.imageDom = imageDom }} className="sacle-image" src={image.url} />
        </div>
      }
      </Motion>
    );
  }
}

ImageScale.contextTypes = {
  actions: PropTypes.object
}

export default ImageScale