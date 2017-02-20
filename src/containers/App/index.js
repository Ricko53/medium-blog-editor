import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MediumEditorList from '../../compontents/ReactMediumEditor';
import AddButtonMenu from '../../compontents/AddButtonMenu';
import * as AppActions from '../../actions';

import './style.scss';
import '../../assets/style/style.scss'

class App extends Component {
  static propTypes = {
    bolgData: PropTypes.array,
    actions: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.info(this.props.bolgData)
    console.info(this.props.actions)
  }

  render() {

    return (
      <div className="viewport">
        <div className="content">
          <MediumEditorList actions={this.props.actions} mediumBlog={this.props.bolgData}></MediumEditorList>
        </div>
        <AddButtonMenu  actions={this.props.actions} />
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