import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MediumEditorList from '../../compontents/MediumEditorList';
import AddButtonMenu from '../../compontents/AddButtonMenu';
import DragDownPage from '../../compontents/DragDownPage'
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

  getChildContext() {
    return {
      actions: this.props.actions
    }
  }

  componentWillMount() {
    console.info(this.props.actions)
  }

  render() {

    return (
      <div className="viewport">
        <div className="content">
          <MediumEditorList actions={this.props.actions} mediumBlog={this.props.bolgData} />
          <AddButtonMenu  actions={this.props.actions} />
          <DragDownPage dragDownData={this.props.dragDownData} mediumBlog={this.props.bolgData} />
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  actions: PropTypes.object,
}

function mapStateToProps(state) {
  const { transactions } = state;
  return {
    bolgData: transactions.transactionsBlog,
    dragDownData: transactions.dragDownPosition
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