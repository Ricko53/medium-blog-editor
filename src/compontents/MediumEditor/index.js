import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import blacklist from 'blacklist';

let MediumEditors

if (typeof document !== 'undefined') {
    MediumEditors = require('medium-editor');
}

import '../../lib/style/medium-editor.min.css';
import '../../lib/style/default.css';

class MediumEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text
    };
  }

  static defaultProps = {
    tag: 'div',
    text: '',
    onChange: () => {},
    options: {},
  };
  
  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this);

    this.medium = new MediumEditors(dom, this.props .options);
    this.medium.subscribe('editableInput', (e) => {
      this._updated = true;
      this.change(dom.innerHTML);
    });
  }

  componentDidUpdate() {
    this.medium.restoreSelection();
  }

  componentWillUnmount() {
    this.medium.destroy();
  }

  shouldComponentUpdate(nextprops, nextstate) {
    // if(nextprops.text === this.state.text) {
    //   return false
    // }
    // return true
    return false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.state.text && !this._updated) {
      this.setState({ 
        text: nextProps.text 
      });
    }

    if (this._updated) this._updated = false;
  }

  change(text) {
    this.props.onChange(text, this.props.paragraphName);
  }

  render() {
    const tag = this.props.tag;
    const childProps = {
      dangerouslySetInnerHTML: { __html: this.state.text }
    }
    if (this.medium) {
      this.medium.saveSelection();
    }

    return React.createElement(tag, childProps);
  }
};

MediumEditors.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  options: PropTypes.any,
  onChange: PropTypes.func,
  paragraphName: PropTypes.string,
  flushEditorDOM: PropTypes.bool,
};

export default MediumEditor;
