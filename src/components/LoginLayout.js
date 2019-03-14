import React, { Component } from "react";

class LoginLayout extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return (
      <nav>
        this is loginNav
        {children}
        this is loginFooter
      </nav>
    );
  }
}

export default LoginLayout;
