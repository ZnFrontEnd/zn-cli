import React, { Component } from "react";
import Styles from "./index.less";

class LoadingTemp extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return (
      <div>
        <h1 className={Styles.loadingTip}>loading。。。</h1>
        {children}
      </div>
    );
  }
}

export default LoadingTemp;
