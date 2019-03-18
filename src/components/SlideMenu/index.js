import { Menu, Icon } from 'antd';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { checkType } from "@/utils/utils";

const { SubMenu } = Menu;

class TestSlideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  componentDidMount = () => {
    console.log(this.props)
  }

  createGroup = () => {
    
  }
  
  createMemu = () => {
    const { routeConfig } = this.props;
    const menuArr = [];
    if (routeConfig && checkType(routeConfig, "Array")) {
        routeConfig.forEach((item, index) => {
            const { children } = item;
            let itemstr = '';
            if (children) {
                itemstr += '<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>';
                children.forEach((child, i) => {
                    itemstr += '<Menu.Item key="3"><Link to="/">home</Link></Menu.Item>';
                })
                itemstr += '</SubMenu>';
            } else {
                itemstr += '<Menu.Item key="1"><Icon type="pie-chart" /><span>Option 1</span></Menu.Item>'; 
            }
            menuArr.push(itemstr);
        })
    }
    console.log(menuArr)
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
      </Menu>
    );
  }
}

export default TestSlideMenu;
