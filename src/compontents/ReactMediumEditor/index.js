import React, { Component, PropTypes } from 'react';
// import Editor from 'react-medium-editor';
import Editor from '../MediumEditor';

// import '../../lib/style/medium-editor.min.css';
// import '../../lib/style/default.css';

class MediumEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '<p>If you’ve been a part of the web community for the past few years, you already know the preferred method of solving a problem: build this with JavaScript. And so webpack attempts to make the build process easier by passing dependencies through JavaScript. But the true power of its design isn’t simply the code management part; it’s that this management layer is 100% valid JavaScript (with Node features). webpack gives you the ability to write valid JavaScript that has a better sense of the system at large.</p>'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text, medium) {
    this.setState({text: text});
  }

  render() {
    return (
      <div className="editor-container">
        <Editor
          text={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default MediumEditor;
