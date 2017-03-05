import React, { Component, PropTypes } from 'react';
import Editor from '../MediumEditor';
import ImageScale from '../ImageScale'

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
    if(nextprops.dragDownData.open !== this.state.dragDownData.open || nextprops.dragDownData.open){
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

    return (
      <div className="drag-down-list-container" style={pageStyle}>
        {
          props.mediumBlog.map((item, index) => {
            if(item.type === 'text') {
              return (
                <div key={index} className="editor-content media-with">
                  <Editor
                    paragraphName={index}
                    text={item.text}
                    onChange={this.handleChange}
                  />
                </div>
              )
            } else if (item.type === 'image') {
              return (
                <div key={index} className="image-content">
                  <ImageScale 
                    paragraphName={index}
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
