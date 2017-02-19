import React, { Component, PropTypes } from 'react';
// import Editor from 'react-medium-editor';
import Editor from '../MediumEditor';

import './style.css'

// import '../../lib/style/medium-editor.min.css';
// import '../../lib/style/default.css';

let mediumBlog = [
  {
    text: 'paragraph one',
    type: 'text',
  },
  {
    text: `I'm a apple`,
    type: 'text',
  }
]

class MediumEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // mediumBlog: mediumBlog,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextprops, nextstate) {
    return false
  }

  handleChange(text, paragraphName) {
    // this.setState({
    //   [paragraphName]: text
    // });
    // this.state[paragraphName] = text
    mediumBlog[paragraphName].text = text
  }

  render() {
    console.log('render main')
    return (
      <div className="editor-container">
        {
          mediumBlog.map((item, index) => {
            return (
              <div key={index} className="editor-content">
                <Editor
                  paragraphName={index}
                  text={item.text}
                  onChange={this.handleChange}
                />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default MediumEditor;
