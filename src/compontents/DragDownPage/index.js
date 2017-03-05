import React, { Component, PropTypes } from 'react';
import FakeMediumText from '../FakeMediumText';
import FakeImageScale from '../FakeImageScale'

import './style.css'

class DragDownPage extends Component {

  static propTypes = {
    mediumBlog: PropTypes.array,
    dragDownData: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  shouldComponentUpdate(nextprops, nextstate) {
    if(nextprops.dragDownData.open !== this.props.dragDownData.open || nextprops.dragDownData.open){
      return true
    }
    return false
  }

  render() {
    let props = this.props

    console.debug('render DragDownPage')

    let pageStyle = {
      visibility: props.dragDownData.open ? 'visible' : 'hidden',
      opacity: props.dragDownData.open ? 1 : 0,
    }

    console.log(props.dragDownData.position)

    return (
      <div className="drag-down-list-container" style={pageStyle}>
        {
          props.mediumBlog.map((item, index) => {
            let positionStyle = {
              transform: props.dragDownData.position.elementPositionTopList ? `translate(${props.dragDownData.position.elementPositionLeft}px, ${props.dragDownData.position.elementPositionTopList[index]}px)` : `translate(0)`
            }

            if(item.type === 'text') {
              return (
                <div key={index} className="drag-editor-content editor-content media-with" style={positionStyle}>
                  <FakeMediumText
                    text={item.text}
                  />
                </div>
              )
            } else if (item.type === 'image') {

              if(item.fullScreen) {
                positionStyle.transform = props.dragDownData.position.elementPositionTopList ? `translate( 0, ${props.dragDownData.position.elementPositionTopList[index]}px )` : `translate(0)`
              }

              return (
                <div key={index} className="drag-image-content image-content" style={positionStyle}>
                  <FakeImageScale 
                    image={item}   
                  />
                </div>
              );
            }
          })
        }
      </div>
    );
  }
}

DragDownPage.contextTypes = {
  actions: PropTypes.object
}

export default DragDownPage;
