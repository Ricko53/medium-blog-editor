import React, { Component, PropTypes } from 'react';

import { defaultSectionData } from '../../data/default'
import './style.scss'

class AddButtonMenu extends Component {
  static propTypes = {
    actions: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
    };

    this.addSection = this.addSection.bind(this);
  }

  shouldComponentUpdate(nextprops, nextstate) {
    return true
  }

  addSection() {
    this.props.actions.createTransaction(defaultSectionData())
  }

  render() {
    console.debug('render AddButtonMenu')

    return (
      <div className="operate">
        <div className="operate-add-button" onClick={this.addSection}> + </div>
      </div>
    );
  }
}

export default AddButtonMenu;
