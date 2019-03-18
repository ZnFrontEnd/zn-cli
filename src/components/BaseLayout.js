import React, { Component } from "react";
import TestSlideMenu from "@/components/SlideMenu/index";

class BaseLayout extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children, routeConfig } = this.props;
    return (
      <nav>
        <TestSlideMenu routeConfig={routeConfig} />
        {children}
        this is footer
      </nav>
    );
  }
}

export default BaseLayout;
