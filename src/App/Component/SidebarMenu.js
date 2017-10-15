import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

const SubMenu = Menu.SubMenu;

export default () =>(
  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    <Menu.Item key="1">
      <Link to='/students'>
        <Icon type="team" />
        <span>Students</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to='/staffs'>
        <Icon type="user" />
        <span>Staff</span>
      </Link>
    </Menu.Item>
    <SubMenu
      key="sub1"
      title={<span><Icon type="book" /><span>Finance</span></span>}
    >
      <Menu.Item key="3"><Link to='/finance/account'>Account</Link></Menu.Item>
      <Menu.Item key="4"><Link to='/finance/salary'>Salary</Link></Menu.Item>
      <Menu.Item key="5"><Link to='/finance/record'>Record</Link></Menu.Item>
    </SubMenu>
  </Menu>
);