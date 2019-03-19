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
    console.log(this.props);
  }

  createGroup = (group, groupName) => {
    const itemArr = [];
    group.forEach((item, index) => {
      itemArr.push(<Menu.Item key={item.key}><Link to={item.path}>{item.name}</Link></Menu.Item>);
    });
    return (
      <SubMenu key={`sub${group.key}`} title={<span><Icon type="mail" /><span>{groupName}</span></span>}>
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

  createMemu = () => {
    // eslint-disable-next-line react/prop-types
    const { routeConfig } = this.props;
    const menuArr = [];
    if (routeConfig && checkType(routeConfig, "Array")) {
      routeConfig.forEach((item, index) => {
        const { children } = item;
        if (children) {
          menuArr.push(this.createGroup(children, item.name));
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
