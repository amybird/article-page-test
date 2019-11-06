import React, { Component } from 'react';
import getDisplayName from 'recompose/getDisplayName';

function withScrollToTop(WrappedComponent) {
  const WithScrollToTop = class extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  WithScrollToTop.displayName = `withScrollToTop(${getDisplayName(
    WrappedComponent
  )})`;

  return WithScrollToTop;
}

export default withScrollToTop;
