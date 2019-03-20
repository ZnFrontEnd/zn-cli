import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routeConfig from "@/route/route.config";
import BaseLayout from "@/components/BaseLayout";
import LoginLayout from "@/components/LoginLayout";
import LoadingTemp from "@/components/Loading";
import loadable from "@loadable/component";

class AuthorizedRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkArr: []
    };
  }

  componentDidMount() {
    // 调用接口获取用户权限，从而刷选路由
    setTimeout(() => {
      this.createAllRoute();
    }, 3e3);
  }

  createAllRoute = () => {
    const linkArr = [];
    const createRoute = ({ component: Component, path, ...rest }) => (
      <Route path={path} component={Component} {...rest} />
    );
    routeConfig.forEach(item => {
      // eslint-disable-next-line global-require
      // const ts = require(`../page/${item.component}/index`);
      //  ts.default
      const { children } = item;
      if (children) {
        children.forEach((route, i) => {
          linkArr.push(createRoute({
            ...route,
            component: loadable(() => import(`../pages/${route.component}/index`))
          }));
        });
      } else {
        linkArr.push(
          createRoute({
            ...item,
            component: loadable(() => import(`../pages/${item.component}/index`))
          })
        );
      }
    });
    this.setState({
      linkArr: linkArr.concat(
        <Route
          key={linkArr.length}
          component={loadable(() => import("@/components/NotFind"))}
        />
      )
    });
  }

  render() {
    const { linkArr } = this.state;
    let Layout = "";
    if (window.location.pathname.indexOf("login") > -1) {
      Layout = LoginLayout;
    } else {
      Layout = BaseLayout;
    }
    return (
      <Layout routeConfig={routeConfig}>
        <Switch>{linkArr.length ? linkArr : <LoadingTemp />}</Switch>
      </Layout>
    );
  }
}

export default AuthorizedRoute;
