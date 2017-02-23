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
  }

  componentDidMount() {
    let imgWidth = parseInt(this.refs.imageDom.width)
    let imgHeight = parseInt(this.refs.imageDom.height)

    // 0.6 按照 content 宽度 60% 计算
    // scaleVal = 10/6
    let ratio = imgHeight/imgWidth
    defaultHeight = winWidth * 0.6 * ratio

    this.setState({
      ratio: ratio
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
      width: width,
      height: states.ratio ? width * states.ratio : defaultHeight,
    }
    // let imageStyle = {
    //   transform: props.image.fullScreen ? `scale(${scaleVal})` : `scale(1, 1)`
    // }

    return (
      <div className="scale-box" style={boxStyle} onClick={this.scaleImage}>
        <img ref="imageDom" className="sacle-image" src={props.image.url} />
      </div>
    );
  }
}

ImageScale.contextTypes = {
  actions: PropTypes.object
}

export default ImageScale