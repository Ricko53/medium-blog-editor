import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MediumEditor from '../../compontents/ReactMediumEditor'
import * as AppActions from '../../actions';
import './style.scss';

class App extends Component {

  static propTypes = {
    bolgData: PropTypes.object,
    actions: PropTypes.object
  };

  componentWillMount() {
    console.log(this.props.bolgData)
  }

  render() {

    return (
      <div className="viewport">
        <div className="content">
          <MediumEditor />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { transactions } = state;
  return {
    bolgData: transactions
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