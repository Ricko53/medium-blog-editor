import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MediumEditorList from '../../compontents/ReactMediumEditor'
import * as AppActions from '../../actions';
import './style.scss';

class App extends Component {

  static propTypes = {
    bolgData: PropTypes.array,
    actions: PropTypes.object
  };

  componentWillMount() {
    console.log(this.props.bolgData)
  }

  render() {

    return (
      <div className="viewport">
        <div className="content">
          <MediumEditorList actions={this.props.actions} mediumBlog={this.props.bolgData}></MediumEditorList>
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