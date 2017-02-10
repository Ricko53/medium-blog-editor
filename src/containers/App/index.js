import React, { Component, PropTypes } from 'react';

import MediumEditor from '../../compontents/MediumEditor'
import './style.scss';

class App extends Component {

  componentWillMount() {
  }

  render() {

    return (
      <div className="viewport">
        <div className="content">
          <MediumEditor></MediumEditor>
        </div>
      </div>
    );
  }
}

export default App;