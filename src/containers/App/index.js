import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MediumEditorList from '../../compontents/ReactMediumEditor'
import * as AppActions from '../../actions';
import { defaultSectionData } from '../../data/default'
import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.addSection = this.addSection.bind(this);
  }

  static propTypes = {
    bolgData: PropTypes.array,
    actions: PropTypes.object
  };

  componentWillMount() {
    console.info(this.props.bolgData)
    console.info(this.props.actions)
  }

  addSection() {
    this.props.actions.createTransaction(defaultSectionData())
  }

  render() {

    return (
      <div className="viewport">
        <div className="content">
          <MediumEditorList actions={this.props.actions} mediumBlog={this.props.bolgData}></MediumEditorList>
        </div>
        <div className="operate">
          <div className="operate-add-button" onClick={this.addSection}> + </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { transactions } = state;
  return {
    bolgData: transactions.transactionsBlog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);