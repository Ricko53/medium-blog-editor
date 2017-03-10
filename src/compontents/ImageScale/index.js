import React, { Component, PropTypes } from 'react';

import './style.scss'

let winWidth = window.innerWidth
// let scaleVal = 1
let defaultHeight = 600

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
    let imgWidth = parseInt(this.refs.imageDom.width)
    let imgHeight = parseInt(this.refs.imageDom.height)

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
      width: width,
      height: image.ratio ? width * image.ratio : defaultHeight,
    }
    // let imageStyle = {
    //   transform: image.fullScreen ? `scale(${scaleVal})` : `scale(1, 1)`
    // }

    return (
      <div className="scale-box" style={boxStyle} onClick={this.scaleImage}>
        <img ref="imageDom" className="sacle-image" src={image.url} />
      </div>
    );
  }
}

ImageScale.contextTypes = {
  actions: PropTypes.object
}

export default ImageScale