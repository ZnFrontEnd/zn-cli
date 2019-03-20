import React, { Component } from "react";
import SlideMenu from "@/components/SlideMenu/index";

class BaseLayout extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children, routeConfig } = this.props;
    console.log(children);
    return (
      <nav>
        <SlideMenu routeConfig={routeConfig} />
        {children}
        this is footer
      </nav>
    );
  }
}

export default BaseLayout;
