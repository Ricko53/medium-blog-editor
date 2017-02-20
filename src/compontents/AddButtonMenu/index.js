import React, { Component, PropTypes } from 'react';

import { defaultSectionData, defaultImageData } from '../../data/default'
import './style.scss'

class AddButtonMenu extends Component {
  static propTypes = {
    actions: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      stateClass: false
    };

    this.openNav = this.openNav.bind(this);
    this.addSection = this.addSection.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  shouldComponentUpdate(nextprops, nextstate) {
    return true
  }

  openNav() {
    this.setState({
      stateClass: !this.state.stateClass
    })
  }

  addSection() {
    this.props.actions.createTransaction(defaultSectionData())
    this.openNav()
  }

  addImage() {
    this.props.actions.createTransaction(defaultImageData())
  }

  render() {
    console.debug('render AddButtonMenu')

    return (
      <div className={this.state.stateClass ? 'operate show-nav' : 'operate hidden-nav'}>
        <div className="operate-list">
          <div className="operate-nav">
            <div className="operate-button second-nav" onClick={this.addSection}>
              <i className="icon-pencil"></i>
            </div>
            <div className="operate-button first-nav" onClick={this.addImage}>
              <i className="icon-camera"></i>
            </div>
          </div>
          <div className="operate-add-button operate-button" onClick={this.openNav}> + </div>
          <div className="operate-nav">
            <div className="operate-button first-nav">
              <i className="icon-images"></i>
            </div>
            <div className="operate-button second-nav">
              <i className="icon-video-camera"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddButtonMenu;
