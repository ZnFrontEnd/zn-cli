import React, { Component } from "react";
import SlideMenu from "@/components/SlideMenu/index";
import Styles from "./base.less";

class BaseLayout extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children, routeConfig } = this.props;
    console.log(children);
    return (
      <div>
        <div className={Styles.slideContainer}>
          <SlideMenu routeConfig={routeConfig} />
        </div>
        <div className="container">
          {children}
        </div>
        this is footer
      </div>
    );
  }
}

export default BaseLayout;
