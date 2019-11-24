import React, { Component } from 'react';
import ErroIndicator from '../error-indicator/error-indicator.jsx';

export default class ErrorBounndry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <ErroIndicator />;
    }

    return this.props.children; // ?
  }
}
