import React from 'react';
import { Dropdown, Icon, Menu, Button } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Button>Log out</Button>
    </Menu.Item>
  </Menu>
);

export default () => (
  <div className="header-right">
    <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
      <Icon type="user" />
    </Dropdown>
  </div>
);
