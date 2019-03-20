import React, { Component } from "react";
import {
  Route,
  Switch,
  withRouter,
  Redirect
} from "react-router-dom";
import routeConfig from "@/route/route.config";
import BaseLayout from "@/components/BaseLayout";
import LoginLayout from "@/components/LoginLayout";
import LoadingTemp from "@/components/Loading";
import loadable from "@loadable/component";

class AuthorizedRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layerType: {
        BaseLayout,
        LoginLayout
      },
      linkArr: []
    };
  }

  componentDidMount() {
    // 调用接口获取用户权限，从而刷选路由
    setTimeout(() => {
      this.setState({
        linkArr: this.createAllRoute(routeConfig).concat([<Redirect key="Redirect" to="/" />])
      });
    }, 3e3);
  }

  createAllRoute = (routeConf, layoutType) => {
    let linkArr = [];
    const createRoute = ({ component: Component, path, ...rest }) => (
      <Route path={path} component={Component} {...rest} />
    );
    routeConf.forEach(item => {
      // eslint-disable-next-line global-require
      // const ts = require(`../page/${item.component}/index`);
      //  ts.default
      const { routes } = item;
      if (routes) {
        linkArr = linkArr.concat(this.createAllRoute(routes, item.component || layoutType));
      } else {
        linkArr.push(
          createRoute({
            ...item,
            component: loadable(() => import(`../pages/${item.component}/index`))
          })
        );
        this.collectRouteRelation(layoutType, item.path);
      }
    });
    return linkArr;
  }

  // 路由和布局组件的依赖收集
  collectRouteRelation = (layerType, path) => {
    // 将数据放在方法上，而不是state中，防止render频繁执行
    const { layoutType } = this.collectRouteRelation;
    const layoutObj = layoutType || {};
    layoutObj[path] = layerType;
    this.collectRouteRelation.layoutType = layoutObj;
  }

  render() {
    const { linkArr, layerType } = this.state;
    const { layoutType } = this.collectRouteRelation;
    // eslint-disable-next-line react/prop-types
    const { location } = this.props;
    let Layout = "";
    if (layoutType && linkArr.length > 0 && layoutType[location.pathname]) {
      Layout = layerType[layoutType[location.pathname]] || BaseLayout;
    } else {
      // 此处应该默认先展示占位组件/loading组件
      Layout = LoadingTemp;
    }
    return (
      <Layout routeConfig={routeConfig}>
        <Switch>
        {linkArr}
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(AuthorizedRoute);
