import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';

import './style.scss'

const boxWidth = window.innerWidth * 0.6

class SlideImages extends Component {
  static propTypes = {
    slideData: PropTypes.object,
    paragraphName: PropTypes.number,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      currentInt: this.props.slideData.currentInt
    }

    this.changeItem = this.changeItem.bind(this)
  }

  componentDidMount() {
  }

  shouldComponentUpdate(nextprops, nextstate) {
    return true
  }

  componentWillReceiveProps(nextprops, nextContext) {
  }

  changeItem(index) {
    this.setState({
      currentInt: index
    })
  }

  render() {
    console.debug('slide images render')

    const { slideData } = this.props
    const { currentInt } = this.state
 
    let boxStyle = {
      transform: `translateX(${ boxWidth * -1 * currentInt}px)`
    }

    return (
      <section className="slide-container">
        <div className="slide-ul" style={boxStyle}>
          {
            slideData.list.map((img, i)=>{
              return <img key={i} className="slide-li" style={{height: boxWidth * img.ratio, width: boxWidth}} src={img.url} />
            })
          }
        </div>
        <div className="slide-nav">
          {
            slideData.list.map((img, i)=>{
              return <div key={i} className={currentInt === i ? "slide-nav-item active-nav" : "slide-nav-item"} onClick={() => this.changeItem(i)}></div>
            })
          }
        </div>
      </section>
    )
  }
}

SlideImages.contextTypes = {
  actions: PropTypes.object
}

export default SlideImages