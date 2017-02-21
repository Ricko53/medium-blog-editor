import React, { Component, PropTypes } from 'react';
// import Editor from 'react-medium-editor';
import Editor from '../MediumEditor';
import ImageScale from '../ImageScale'

import './style.css'

class MediumEditorList extends Component {

  static propTypes = {
    mediumBlog: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextprops, nextstate) {
    if(nextprops.mediumBlog.length === this.props.mediumBlog.length) return false
    return true
  }

  handleChange(text, paragraphName) {
    this.props.mediumBlog[paragraphName].text = text
  }

  render() {
    let props = this.props

    console.debug('render MediumEditorList')

    return (
      <div className="editor-list-container">
        {
          props.mediumBlog.map((item, index) => {
            if(item.type === 'text') {
              return (
                <div key={index} className="editor-content">
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
                    url={item.url}   
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

export default MediumEditorList;
