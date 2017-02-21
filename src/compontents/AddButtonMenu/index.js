import React, { Component, PropTypes } from 'react';

import { defaultSectionData, defaultImageData } from '../../data/default'
import './style.scss'

let file

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
    this.updateImage = this.updateImage.bind(this);
  }

  componentDidMount() {
    file = document.querySelector("[type=file]");
  }

  shouldComponentUpdate(nextprops, nextstate) {
    return true
  }

  openNav() {
    if( !this.state.stateClass ){
      this.addInputEventList(file)
    } else {
      this.removeInputEventList(file)
    }

    this.setState({
      stateClass: !this.state.stateClass
    })
  }

  addSection() {
    this.props.actions.createTransaction(defaultSectionData())
    this.openNav()
  }

  addInputEventList(inputDom) {
    inputDom.addEventListener("change", this.updateImage, false);
  }

  removeInputEventList(inputDom) {
    inputDom.removeEventListener("change", this.updateImage, false);
  }

  updateImage(e) {
    let self = this
    // for (let i = 0, f; f = e.target.files[i]; i++) {
      let f = e.target.files[0]
      // if (f.type.indexOf("image") !== 0) continue;
      let reader = new FileReader();
      reader.onload = (e) => this.addImage(e.target.result);
      reader.readAsDataURL(f);
    // }
  }

  addImage(url) {
    this.props.actions.createTransaction(defaultImageData(url))
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
            <div className="operate-button first-nav">
              <input className="operate-up-input" type="file" accept="image/gif, image/jpeg, image/png" />
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
