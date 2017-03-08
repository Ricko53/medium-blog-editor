import React, { Component, PropTypes } from 'react';
import {Motion, spring} from 'react-motion';

import FakeMediumText from '../FakeMediumText';
import FakeImageScale from '../FakeImageScale'

import './style.css'

function reinsertDown(arr, from, to) {
  let _arr = arr.slice(0);
  let val = _arr[from];
  val.offsetTop = _arr[to].offsetTop
  _arr[to].offsetTop = _arr[to].offsetTop + val.offsetHeight +10
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
}

function reinsertUp(arr, from, to) {
  let _arr = arr.slice(0);
  let val = _arr[from];
  _arr[to].offsetTop = val.offsetTop
  val.offsetTop = val.offsetTop + _arr[to].offsetHeight + 10
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
}

function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}

const springConfig = {stiffness: 300, damping: 30};
let positionList = []

class DragDownPage extends Component {

  static propTypes = {
    mediumBlog: PropTypes.array,
    dragDownData: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      topDeltaY: 0,
      mouseY: 0,
      isPressed: false,
      originalPosOfLastPressed: 0,
    }

    this.addTouchEventListener = this.addTouchEventListener.bind(this)
    this.removeTouchEventListener = this.removeTouchEventListener.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
  }

  componentDidMount() {
    this.addTouchEventListener()
  }

  componentWillReceiveProps(nextprops, context) {
    if(nextprops.dragDownData.open !== this.props.dragDownData.open && nextprops.dragDownData){
      positionList = [].concat(nextprops.dragDownData.position.elementPositionTopList)
    }
  }

  shouldComponentUpdate(nextprops, nextstate) {
    if(nextprops.dragDownData.open !== this.props.dragDownData.open || nextprops.dragDownData.open){
      return true
    }
    return false
  }

  componentWillUnmount() {
    this.removeTouchEventListener()
  }

  addTouchEventListener() {
    window.addEventListener('touchmove', this.handleTouchMove)
    window.addEventListener('touchend', this.handleMouseUp)
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('mouseup', this.handleMouseUp)
  }

  removeTouchEventListener() {
    window.removeEventListener('touchmove', this.handleTouchMove)
    window.removeEventListener('touchend', this.handleMouseUp)
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('mouseup', this.handleMouseUp) 
  }

  handleTouchStart(key, pressLocation, e) {
    this.handleMouseDown(key, pressLocation, e.touches[0])
  }

  handleTouchMove(e) {
    e.preventDefault();
    this.handleMouseMove(e.touches[0])
  }

  handleMouseDown(pos, pressY, {pageY}) {
    console.info(pos, pressY, pageY)
    this.setState({
      topDeltaY: pageY - pressY,
      mouseY: pressY,
      isPressed: true,
      originalPosOfLastPressed: pos,
    })
  }

  handleMouseMove({pageY}) {
    const {isPressed, topDeltaY, originalPosOfLastPressed} = this.state

    if (isPressed) {
      const mouseY = pageY - topDeltaY
      let realId = 0
      for(let i = 0; i < positionList.length; i++){
        if(positionList[i].id === originalPosOfLastPressed) {
          realId = i
          break;
        }
      }
      let curItemPosition = positionList[realId]
      let curDeltaY =  curItemPosition.offsetTop - mouseY
      let moveBackEle = positionList[realId + 1]
      if(curDeltaY > 0) {
        if(realId > 0){
          moveBackEle = positionList[realId - 1]
          if(moveBackEle.offsetHeight < curDeltaY) {
            // this.context.actions.changeBlogSort(originalPosOfLastPressed, originalPosOfLastPressed - 1)
            positionList = reinsertDown(positionList, realId, realId - 1)
          }
        }
      } else {
        if(moveBackEle) {
          if(moveBackEle.offsetHeight < curDeltaY * -1) {
            // this.context.actions.changeBlogSort(originalPosOfLastPressed, originalPosOfLastPressed + 1)
            positionList = reinsertUp(positionList, realId, realId + 1)
          }
        }
      }

      this.setState({
        mouseY: mouseY,
      })
    }
  }

  handleMouseUp() {
    this.setState({isPressed: false, topDeltaY: 0})
  }

  render() {
    const {mouseY, isPressed, originalPosOfLastPressed} = this.state;
    const props = this.props

    console.debug('render DragDownPage')

    let pageStyle = {
      visibility: props.dragDownData.open ? 'visible' : 'hidden',
      opacity: props.dragDownData.open ? 1 : 0,
    }

    let content = props.dragDownData.open ? (
        props.mediumBlog.map((item, index) => {  

          let elePosition = {}
          let rId = index

          for(let posl of positionList){
            if(posl.id === rId){
              elePosition = posl
              break;
            }
          }

          let positionStyle = {
            transform: `translate(${props.dragDownData.position.elementPositionLeft}px, ${elePosition.offsetTop}px)`
          }

          let positionLeft = props.dragDownData.position.elementPositionLeft

          let style = originalPosOfLastPressed === rId && isPressed ? {
            y: spring(mouseY, springConfig),
          } : {
            y: spring(elePosition.offsetTop, springConfig),
          }

          if(item.type === 'text') {
            return (
              <Motion style={style} key={index}>
                {({y}) => 
                  <div 
                    className="drag-editor-content editor-content media-with" 
                    style={{
                      transform: `translate3d(${positionLeft}px, ${y}px, 0)`
                    }}
                    onMouseDown={this.handleMouseDown.bind(null, rId, y)}
                    onTouchStart={this.handleTouchStart.bind(null, rId, y)}
                  >
                    <FakeMediumText
                      text={item.text}
                    />
                  </div>
                }
              </Motion>
            )
          } else if (item.type === 'image') {
            if(item.fullScreen) {
              positionStyle.transform = `translate( 0, ${elePosition.offsetTop}px )`
            }

            return (
              <div key={index} className="drag-image-content image-content" style={positionStyle}>
                <FakeImageScale 
                  image={item}
                  fullScreen={item.fullScreen}   
                />
              </div>
            );
          }
        })
    ) : null

    return (
      <div className="drag-down-list-container" style={pageStyle}>
        {content}
      </div>
    );
  }
}

DragDownPage.contextTypes = {
  actions: PropTypes.object
}

export default DragDownPage;
