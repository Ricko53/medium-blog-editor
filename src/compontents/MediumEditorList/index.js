import React, { Component, PropTypes } from 'react';
// import Editor from 'react-medium-editor';
import Editor from '../MediumEditor';
import ImageScale from '../ImageScale'

import './style.css'

class MediumEditorList extends Component {

  static propTypes = {
    mediumBlog: PropTypes.array,
    actions: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.getElementTop = this.getElementTop.bind(this);
  }

  shouldComponentUpdate(nextprops, nextstate) {
    // if(nextprops.mediumBlog.length === this.props.mediumBlog.length) return false
    return true
  }

  handleChange(text, paragraphName) {
    this.props.mediumBlog[paragraphName].text = text
  }

  getElementTop() {
    let childList = this.refs.container.childNodes
    let elementPositionTopList = []

    // 获取文本元素距离右边的距离
    let elementPositionLeft = childList[1].offsetLeft
    let elementPositionWidth = childList[1].offsetWidth
    childList.forEach((ele)=>{
      elementPositionTopList.push(ele.offsetTop)
    })
    this.context.actions.openDragDownPage(true, {
      elementPositionLeft,
      elementPositionWidth,
      elementPositionTopList
    })
  }

  render() {
    let props = this.props

    console.debug('render MediumEditorList')

    return (
      <div ref="container" className="editor-list-container" onClick={this.getElementTop}>
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

MediumEditorList.contextTypes = {
  actions: PropTypes.object
}

export default MediumEditorList;
