import React, { Component, PropTypes } from 'react';

import './style.scss'

let winWidth = window.innerWidth

class FakeImageScale extends Component {
  static propTypes = {
    image: PropTypes.object,
    fullScreen: PropTypes.bool,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      ratio: false
    }
  }

  componentDidMount() {
    let imgWidth = parseInt(this.refs.imageDom.width)
    let imgHeight = parseInt(this.refs.imageDom.height)

    // 0.6 按照 content 宽度 60% 计算
    // scaleVal = 10/6
  }

  shouldComponentUpdate(nextprops, nextstate) {
    return false
  }

  render() {
    console.debug('FakeImageScale render')

    let props = this.props;
    let states = this.state;
    let width = props.fullScreen ? winWidth : winWidth * 0.6
    let boxStyle = {
      width: width,
      height: 0,
    }
    
    return (
      <div className="scale-box fake-scale-box" style={boxStyle}>
        <img ref="imageDom" className="sacle-image" src={props.image.url} />
      </div>
    );
  }
}

export default FakeImageScale