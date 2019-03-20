import React, { Component } from "react";

class LoadingTemp extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return (
      <div>
        loading。。。
        {children}
      </div>
    );
  }
}

export default LoadingTemp;
