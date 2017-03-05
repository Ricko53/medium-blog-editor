import React, { Component, PropTypes } from 'react';

class FakeMediumText extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

  shouldComponentUpdate(nextprops, nextstate) {
    return false
  }

  componentDidMount() {
  }

  render() {
    console.debug('FakeMediumText render')

    const childProps = {
      dangerouslySetInnerHTML: { __html: this.props.text }
    }

    return React.createElement('div', childProps)
  }
}

export default FakeMediumText