import React, { Component, PropTypes } from 'react';
// import MediumEditors from 'medium-editor'

import './style.css'

let MediumEditors

if (typeof document !== 'undefined') {
    MediumEditors = require('medium-editor');
}

import '../../lib/style/medium-editor.min.css';
import '../../lib/style/default.css';

class MediumEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    let editor = new MediumEditors('.editor-container', {})
    // editor.subscribe('editableInput', (e) => {
    //   this._updated = true;
    //   this.change(dom.innerHTML);
    // });
  }

  render() {
    return (
      <div className="editor-container">
        <p>If you’ve been a part of the web community for the past few years, you already know the preferred method of solving a problem: build this with JavaScript. And so webpack attempts to make the build process
         easier by passing dependencies through JavaScript. But the true power of its design isn’t simply the code management part; it’s that this management layer is 100% valid JavaScript (with Node features). webp
         ack gives you the ability to write valid JavaScript that has a better sense of the system at large.</p>
      </div>
    );
  }
};

export default MediumEditor;
