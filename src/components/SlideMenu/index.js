import { Menu, Icon } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { checkType } from "@/utils/utils";

const { SubMenu } = Menu;

class SlideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    // console.log(this.props);
  }


  createGroup = (group, groupName, key) => {
    const itemArr = [];
    group.forEach((item, index) => {
      if (item.routes) {
        // 嵌套路由
        itemArr.push(this.createGroup(item.routes, item.name));
      } else {
        itemArr.push(this.createItem(item));
      }
    });
    return (
      <SubMenu key={`sub${key}`} title={<span><Icon type="mail" /><span>{groupName}</span></span>}>
      {itemArr}
      </SubMenu>
    );
  }

  createItem = (item) => (
    <Menu.Item key={item.key}>
    <Link to={item.path}>
      <Icon type="pie-chart" />
      <span>{item.name}</span>
    </Link>
    </Menu.Item>
  )

  createMemu = (routeConf) => {
    // eslint-disable-next-line react/prop-types
    const { routeConfig } = this.props;
    // eslint-disable-next-line no-underscore-dangle
    const _routeConf = routeConf || routeConfig;
    const menuArr = [];
    if (_routeConf && checkType(_routeConf, "Array")) {
      _routeConf.forEach((item, index) => {
        const { routes, key } = item;
        if (routes) {
          if (key) {
            menuArr.push(this.createGroup(routes, item.name, key));
          } else {
            menuArr.push(this.createMemu(routes));
          }
        } else {
          menuArr.push(this.createItem(item));
        }
      });
    }
    return menuArr;
  }

  render() {
    return (
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
      {this.createMemu()}
      </Menu>
    );
  }
}

export default SlideMenu;
